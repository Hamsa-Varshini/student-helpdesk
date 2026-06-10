const express = require('express');
const router = express.Router();
const faqController = require('../controllers/faqController');
const authMiddleware = require('../middleware/authMiddleware');

// Route: GET /api/faqs
// Keeping it open or applying authMiddleware based on preference. Let's make it open for now or protected.
router.get('/', authMiddleware, faqController.getFaqs);

module.exports = router;
