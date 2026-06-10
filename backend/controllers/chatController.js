const chatService = require('../services/chatService');

const handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    const file = req.file; // From multer
    
    if (!message && !file) {
      return res.status(400).json({ error: 'Message or file is required' });
    }

    const data = await chatService.processChat(message, file);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to process chat' });
  }
};

module.exports = { handleChat };
