const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const { upload } = require('../utils/handeFileUpload');

router
    .post('/', upload.single('image'), blogController.createBlog)
    .get('/', blogController.findAllBlog)
    .put('/likes/:id', blogController.likeUpdate)
    .delete('/:blogId', blogController.deleteBlog);

router.get('/:blogId', blogController.findBlog).put('/:blogId', blogController.updateBlog);

module.exports = router;
