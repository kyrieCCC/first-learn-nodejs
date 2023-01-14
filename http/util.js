const fs = require('node:fs')
const path = require('node:path')
const savePath = path.join(__dirname, `${path.sep}upload${path.sep}`)

function saveFile(fileName) {
    const fileStream = fs.createWriteStream(`${savePath}${path.sep}${fileName}`, { flags: 'w' })
    return fileStream
}

module.exports = {
    saveFile
}