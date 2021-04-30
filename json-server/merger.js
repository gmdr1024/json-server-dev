const jsonMerger = require("json-merger")
const dummyjson = require('dummy-json')
const fs = require('fs')

const hbsFiles = fs.readdirSync('db')
hbsFiles.forEach((value, index) => {
  const template = fs.readFileSync('db/' + value, { encoding: 'utf8' })
  hbsFiles[index] = JSON.parse(dummyjson.parse(template))
})
const result = jsonMerger.mergeObjects(hbsFiles)

fs.writeFileSync('db.json', JSON.stringify(result))
