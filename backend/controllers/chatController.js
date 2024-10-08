
const axios = require('axios');

exports.chat = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(`https://dialogflow.googleapis.com/v2/projects/${process.env.DIALOGFLOW_PROJECT_ID}/agent/sessions/session-id:detectIntent`, {
      queryInput: {
        text: {
          text: message,
          languageCode: 'en',
        },
      },
    }, {
      headers: {
        Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with your access token
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to the chatbot', error: error.message });
  }
};
/////////////
// controllers/chatController.js
const { ChatGPTAPI } = require('chatgpt');

const chatWithBot = async (req, res) => {
  const { message } = req.body;

  try {
    const api = new ChatGPTAPI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const response = await api.sendMessage(message);
    res.json({ reply: response.text });
  } catch (error) {
    console.error('Error communicating with ChatGPT API:', error);
    res.status(500).json({ error: 'Chatbot service unavailable' });
  }
};

module.exports = { chatWithBot };


// Placeholder for chat controller code (functionality depends on project needs)
exports.getChatbotResponse = (req, res) => {
  // Implement chatbot logic here (e.g., AI/ML models)
  res.json({ message: 'Chatbot response' });
};
