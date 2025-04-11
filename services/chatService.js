const OpenAI = require("openai");
const client = new OpenAI({
    apiKey: '',
  });
const getChatGPTResponse = async (message) => {
    const response = await client.responses.create({
    model: "gpt-4o",
    input: message//"Write a one-sentence bedtime story about a unicorn."
}); 
return response.output_text
}

module.exports = {getChatGPTResponse}; 

