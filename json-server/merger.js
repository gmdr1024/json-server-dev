const jsonMerger = require("json-merger")
const fs = require('fs')

const jsonFiles = fs.readdirSync('db')
jsonFiles.forEach((value, index) => {
  jsonFiles[index] = 'db/' + value
})
const result = jsonMerger.mergeFiles(jsonFiles)

fs.writeFileSync('db.json', JSON.stringify(result))
