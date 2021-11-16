const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

router
  .post('/', blogController.createBlog)
  .get('/', blogController.findAllBlog)
  .delete('/:blogId', blogController.deleteBlog);

router
  .get('/:blogId', blogController.findBlog)
  .put('/:blogId', blogController.updateBlog);

module.exports = router;
