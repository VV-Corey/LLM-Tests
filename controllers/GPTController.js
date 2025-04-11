const {getChatGPTResponse} = require('../services/chatService')

const handleChatRequest = async (question) => {
    const gptResponse = await getChatGPTResponse(question)
    return gptResponse;
}

module.exports = {
    get : async (req, res) =>
    {
        const gptResponse = await handleChatRequest(req.params.question); 
        res.send(gptResponse)    
    }


}