const Users = require('../models/user.model');
const responseHandler = require('../utils/handle.auth.response.js');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/token.utils');

class AuthService {
    constructor() {
        this.Users = Users;
    }

    async signUp(body) {
        const { username, password, displayPicture } = body;
        if (!username || !password) {
            return responseHandler(401, 'Failed', 'Please complete all User signup data.');
        }
        const hash = await bcrypt.hash(password, 10);

        const user = { username, password, displayPicture };
        try {
            const userExists = await this.Users.findOne({
                username: username,
            });
            if (userExists) {
                return responseHandler(400, 'Failed', 'This Username is taken!');
            }
            user.password = hash;
            const newUser = await this.Users.create({ ...user });
            newUser.password = undefined;
            newUser.__v = undefined;
            return responseHandler(201, 'Success', 'User signup successful', undefined, newUser);
        } catch (err) {
            return responseHandler(401, 'Failed', err.message);
        }
    }

    async login(body) {
        const { username, password } = body;
        if (!username || !password) {
            return responseHandler(401, 'Failed', 'Please complete all user login data.');
        }
        try {
            const user = await this.Users.findOne({
                username: username,
            });
            if (!user) {
                return responseHandler(404, 'Failed', 'This username does not exist.');
            }
            const invalidPassword = await bcrypt.compare(password, user.password);
            if (!invalidPassword) {
                return responseHandler(400, 'Failed', 'Username or password wrong');
            }
            const token = await signToken(user._id);
            user.password = undefined;
            user.__v = undefined;
            return responseHandler(200, 'Success', 'Login successful', token, user);
        } catch (err) {
            return responseHandler(501, 'Failed', err.message);
        }
    }

    async findUser(id) {
        const user = await this.Users.findOne({
            _id: id,
        }).lean();
        if (!user) return 'User not found!';
        return user;
    }
}

module.exports = new AuthService();
