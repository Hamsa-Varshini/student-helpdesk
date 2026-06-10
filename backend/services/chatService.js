const processChat = async (message, file) => {
  // Here we would call an AI service like Gemini or OpenAI.
  // For now, we return a mock response.
  
  let responseText = "This is a mock AI response.";
  if (message) {
    responseText += ` You said: "${message}".`;
  }
  if (file) {
    responseText += ` I also received a file named: ${file.originalname}.`;
  }
  
  return { response: responseText };
};

module.exports = { processChat };
