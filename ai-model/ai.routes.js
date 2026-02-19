const AiRouter = require("express").Router()
const aiCOntroller = require('./ai.controller')

AiRouter.get("/get",aiCOntroller)

module.exports = AiRouter