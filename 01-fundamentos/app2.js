
const fs = require('node:fs')

const data = fs.readFileSync('README.md', 'utf8')

const newData = data.replace(/qwik/ig, 'Angular')

fs.writeFileSync('README-Angular.md', newData)



