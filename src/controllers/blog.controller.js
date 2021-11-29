const blogService = require('../services/blog.service');
const uuid4 = require('uuid4');
const { cloudinary } = require('../utils/handeFileUpload');
class BlogController {
    constructor() {}

    async createBlog(req, res) {
        const { url } = await cloudinary.uploader.upload(req.file.path, {
            public_id: uuid4() + req.file.originalname,
            width: 500,
            height: 500,
            crop: 'fill',
        });
        req.body.imageUrl = url;
        const result = await blogService.createBlog(req.body);
        res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            data: result.data,
        });
    }

    async findBlog(req, res, next) {
        const id = req.params.blogId;
        const result = await blogService.findBlog(id);
        return res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            data: result.data,
        });
    }

    async findAllBlog(req, res) {
        const result = await blogService.findAllBlog(req);
        return res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            data: result.data,
            count: result.count,
        });
    }

    async updateBlog(req, res, next) {
        req.body.id = req.params.blogId;
        const result = await blogService.blogUpdate(req.body);
        return res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            data: result.data,
        });
    }

    async likeUpdate(req, res) {
        const id = req.params.id;
        const result = await blogService.likeUpdate(id);
        return res.status(result.statusCode).json({
            status: result.status,
            message: result.message,
            data: result.data,
        });
    }

    async deleteBlog(req, res, next) {
        const id = req.params.blogId;
        console.log(id);
        const deleleCo = await blogService.deleteBlog(id);
        return res.status(deleleCo.statusCode).json({
            status: deleleCo.status,
            message: deleleCo.message,
        });
    }

}
module.exports = new BlogController();
