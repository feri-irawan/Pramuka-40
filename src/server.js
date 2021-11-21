const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

const {
    loadContents,
    addContent,
    deleteAllContents,
} = require('./utils/content-server')

const serverInfo = {
    host: 'http://localhost',
    port: process.env.PORT || 5000,
}

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/addContent', (req, res) => {
    addContent(req.body)
    res.json(loadContents())
})

app.get('/loadContents', (req, res) => {
    res.json(loadContents())
})

app.delete('/deleteAllContents', (req, res) => {
    deleteAllContents()
    res.send({
        status: 200,
        message: 'All data has been deleted!',
    })
})

app.listen(serverInfo.port, () => {
    console.log(`Server running on port ${serverInfo.host}:${serverInfo.port}`)
})

module.exports = serverInfo
