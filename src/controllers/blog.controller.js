const blogService = require('../services/blog.service');
const AppError = require('../utils/handle.errors');

class BlogController {
  constructor() {}

  async createBlog(req, res) {
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
    const result = await blogService.findAllBlog();
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
  async deleteBlog(req, res, next) {
    const id = req.params.blogId;
    const deleleCo = await blogService.deleteBlog(id);
    return res.status(deleleCo.statusCode).json({
      status: deleleCo.status,
      message: deleleCo.message,
    });
  }
}
module.exports = new BlogController();
