const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { upload } = require('../utils/handeFileUpload');
router
    .post('/signup', authController.signUp)
    .post('/login', authController.login)
    .put('/update', upload.single('image'), authController.updateUser);

module.exports = router;
