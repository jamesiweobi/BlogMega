const express = require('express');
const router = express.Router();
const authRouter = require('../routes/auth.route');
const blogRouter = require('../routes/blog.route');

router.use('/api/v1/auth', authRouter);
router.use('/api/v1/blogs', blogRouter);

module.exports = router;
