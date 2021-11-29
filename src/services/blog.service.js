const { isUrl } = require('express-validator');
const Blog = require('../models/blog.model');
const { courseValidator } = require('../utils/handeFileUpload');
const responseHandler = require('../utils/handle.response');
const AppError = require('../utils/handle.errors');

class BlogService {
    constructor() {
        this.Blog = Blog;
    }

    async createBlog(body) {
        if (!body.header || !body.blogBody || !body.imageUrl || !body.createdBy) {
            return responseHandler(401, 'Failed', 'Please fill all required blog input.');
        }
        const newBlog = {
            header: body.header,
            blogBody: body.blogBody,
            imageUrl: body.imageUrl,
            createdBy: body.createdBy,
            likes: body.likes,
        };
        try {
            const savedBlog = await this.Blog.create(newBlog);
            savedBlog.__v = undefined;
            return responseHandler(200, 'Success', 'Blog created successfully', savedBlog);
        } catch (err) {
            return responseHandler(400, 'Failed', err.message);
        }
    }

    async findBlog(id) {
        try {
            const blog = await this.Blog.findById(id).select('-__v');
            if (blog) {
                return responseHandler(201, 'Success', 'Blog found.', blog);
            }
        } catch (err) {
            if (err.name === 'CastError') {
                return responseHandler(400, 'Failed', `${id} is not a valid blog ID.`);
            }
            return responseHandler(501, 'Failed', err.message);
        }
    }

    async findAllBlog(req) {
        const userID = req.query.userID;
        const category = req.query.category;
        try {
            if (userID) {
                const blog = await this.Blog.find({ createdBy: userID }).select('-__v');
                if (blog) {
                    return responseHandler(200, 'Success', 'Successfully loaded all blog', blog, blog.length);
                }
            }
            if (category) {
                const blog = await this.Blog.find({ category }).select('-__v');
                if (blog) {
                    return responseHandler(200, 'Success', 'Successfully loaded all blog', blog, blog.length);
                }
            }
            const blog = await this.Blog.find({}).select('-__v');
            if (blog) {
                return responseHandler(200, 'Success', 'Successfully loaded all blog', blog, blog.length);
            }
            return responseHandler(200, 'Success', 'No BLogs found', [], 0);
        } catch (err) {
            if (err.name === 'CastError') {
                return responseHandler(400, 'Failed', `${id} is not a valid blog ID.`);
            }
            return responseHandler(501, 'Failed', err.message);
        }
    }

    async blogUpdate(body) {
        const id = body.id;
        try {
            const blogExists = await this.Blog.findById(id).select('-__v');
            if (!blogExists) {
                return responseHandler(400, 'Failed', `Blog with this "${id}" not found`);
            }
            if (body.imageUrl) {
                blogExists.imageUrl.push(body.imageUrl);
                body.imageUrl = blogExists.imageUrl;
            }

            const blog = await this.Blog.findByIdAndUpdate(
                { _id: id },
                { ...body },
                {
                    new: true,
                    runValidators: true,
                }
            ).select('-__v');
            return responseHandler(200, 'Success', 'Succesfully Updated the blog', blog, 0);
        } catch (err) {
            if (err.name === 'CastError') {
                return responseHandler(400, 'Failed', `${id} is not a valid blog ID.`);
            }
            return responseHandler(501, 'Failed', err.message);
        }
    }

    async likeUpdate(id) {
        try {
            const blogExists = await this.Blog.findById(id).select('-__v');
            if (!blogExists) {
                return responseHandler(400, 'Failed', `Blog with this "${id}" not found`);
            }
            blogExists.likes = blogExists.likes + 1;

            const blog = await this.Blog.findByIdAndUpdate(
                { _id: id },
                { ...blogExists },
                {
                    new: true,
                    runValidators: true,
                }
            ).select('-__v');
            return responseHandler(200, 'Success', 'Succesfully Updated the blog likes', blog, 0);
        } catch (err) {
            if (err.name === 'CastError') {
                return responseHandler(400, 'Failed', `${id} is not a valid blog ID.`);
            }
            return responseHandler(501, 'Failed', err.message);
        }
    }

    async deleteBlog(id) {
        try {
            const blog = await this.Blog.findById(id);
            if (!blog) return responseHandler(401, 'Failed', `Blog with this id: ${id} does not exist.`);
            await this.Blog.findOneAndDelete(id);
            return responseHandler(200, 'Success', 'Succesfully deleted the blog');
        } catch (err) {
            if (err.name === 'CastError') {
                return responseHandler(400, 'Failed', `${id} is not a valid blog ID.`);
            }
        }
    }
}

module.exports = new BlogService();
