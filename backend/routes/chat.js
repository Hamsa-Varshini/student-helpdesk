const express = require('express');
const router = express.Router();
const multer = require('multer');
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');

// Setup multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', authMiddleware, upload.single('file'), chatController.handleChat);

module.exports = router;
