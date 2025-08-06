const express = require('express');
const { getConversation } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Get messages with another user
router.get('/:otherUserId', protect, getConversation);

module.exports = router;
