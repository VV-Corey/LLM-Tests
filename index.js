const express = require("express");

const app = express();

const gptRoute = require('./routes/GPT')


app.use('/gpt', gptRoute)

app.listen(3005, () => {
    console.log("Server running on port 3005")
})