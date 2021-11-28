const mongoose = require('mongoose');
const { Schema } = mongoose;
const { isURL } = require('validator');

const isEmpty = function (el) {
    return el.length < 1;
};

// const customURL = [isURL, 'Please enter a valid image Url.'];

const blogSchema = new Schema(
    {
        header: {
            type: String,
            required: [true, 'Please enter a blog heading.'],
        },
        blogBody: {
            type: String,
            required: [true, 'please enter the blog body.'],
        },
        imageUrl: {
            type: String,
            required: [true, 'Please attach a blog image.'],
            validate: [{ validator: isURL, msg: 'Please enter a valid email.' }],
        },
        category: {
            type: String,
            default: 'Social',
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'Users',
        },

        likes: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

blogSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'createdBy',
        select: '-password',
        select: '-__v',
    });
    next();
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
