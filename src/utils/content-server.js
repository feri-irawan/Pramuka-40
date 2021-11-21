const fs = require('fs')
const dataPath = __dirname + '/../data/materi.json'

function loadContents() {
    let contents = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(contents || '[]')
}

function saveContents(contents) {
    fs.writeFileSync(dataPath, JSON.stringify(contents))
}

function addContent(content) {
    const contents = loadContents()
    content['id'] = makeId()

    contents.push(content)

    saveContents(contents)
}

function makeId() {
    const contents = loadContents()

    if (contents.length === 0) return 1

    const id = contents[contents.length - 1].id + 1
    return id
}

function deleteAllContents() {
    fs.writeFileSync(dataPath, '[]')
}

module.exports = {
    loadContents,
    addContent,
    deleteAllContents,
}
