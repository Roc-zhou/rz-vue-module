const fs = require('fs')
const path = require('path')
const resolve = dir => path.join(__dirname, '../', dir)

function getComponentEntries(path) {
  // 读取文件夹
  const files = fs.readdirSync(resolve(path));
  let resultObj = {}
  files.map(e => {
    return resultObj[e] = resolve(path + `/${e}/index.js`)
  })
  return resultObj
}

module.exports = getComponentEntries
// getComponentEntries('src/components')