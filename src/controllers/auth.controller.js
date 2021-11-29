const AppError = require('../utils/handle.errors');
const authService = require('../services/auth.service');
const uuid4 = require('uuid4');
const { cloudinary } = require('../utils/handeFileUpload');

class AuthController {
    constructor() {}
    async signUp(req, res) {
        const result = await authService.signUp(req.body);
        return res.status(result.statusCode).json({
            status: result.status,
            user: result.user,
            message: result.message,
            token: result.token,
        });
    }

    async login(req, res) {
        const result = await authService.login(req.body);
        return res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            user: result.user,
            token: result.token,
        });
    }

    async logOut(req, res) {
        const id = req.params.id;
        // TODO: Delete the token from the cookie or set the token to expire in 1sec
    }

    async updateUser(req, res) {
        const { url } = await cloudinary.uploader.upload(req.file.path, {
            public_id: uuid4() + req.file.originalname,
            width: 300,
            height: 300,
            crop: 'fill',
        });
        req.body.displayPicture = url;
        const result = await authService.updateUser(req.body);
        return res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            user: result.user,
        });
    }
}
module.exports = new AuthController();
