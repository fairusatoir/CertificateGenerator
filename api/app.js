const express = require('express')
require('./db/connect')

const trainingRouter = require('./router/trainingRouter')
const participantRouter = require('./router/participantRouter')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(trainingRouter)
app.use(participantRouter)

app.listen(port, () => {
    console.log('Server up on '+port)
})
