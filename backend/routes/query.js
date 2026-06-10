const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, queryController.submitQuery);

module.exports = router;
