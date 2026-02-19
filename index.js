const express = require("express");
const app = express()
const cors = require('cors')
const dotenv = require("dotenv");
const AiRouter = require("./ai-model/ai.routes");



dotenv.config()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT; 

app.get("/api",(req,res) => {
    res.json({
        message:"server is running"
    })
})

app.use("/api",AiRouter);

app.listen(PORT,() => {
    console.log(`app is running on server http://localhost:${PORT}`)
})
