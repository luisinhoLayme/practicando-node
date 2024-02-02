const fs = require('node:fs')

const content = fs.readFileSync('README.md', 'utf8')

const words = content.split(' ')
// const qwikWordCount = words.filter(word => word.toLowerCase().includes('qwik')).length

// retorna un arreglo
// si no lo encuentra retorna arreglo vacio
const qwikWordCount = content.match(/qwik/gi ?? []).length

console.log('Palabras: ', words.length)
console.log('Palabras qwik: ', qwikWordCount)


