const mongoose = require('mongoose');
const { Schema } = mongoose;
const { isURL } = require('validator');

const isEmpty = function (el) {
    return el.length === 0;
};

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please enter a valid password string.'],
        minLength: [6, 'password length must be at least 6 characters long'],
    },
    displayPicture: {
        type: String,
        default: 'https://wallpapercave.com/wp/wp8090325.jpg',
        validate: [{ validator: isURL, msg: 'Please enter a valid email' }],
    },
    bio: {
        type: String,
    },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
