const AppError = require('../utils/handle.errors');
const authService = require('../services/auth.service');

class AuthController {
    constructor() {}
    async signUp(req, res, next) {
        const result = await authService.signUp(req.body, next);
        res.status(result.statusCode).json({
            status: result.status,
            user: result.user,
            message: result.message,
            token: result.token,
        });
    }

    async login(req, res) {
        const result = await authService.login(req.body);
        return res.status(result.statusCode).send({
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
}
module.exports = new AuthController();
