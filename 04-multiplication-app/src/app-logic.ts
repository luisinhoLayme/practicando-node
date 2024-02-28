import fs from 'node:fs'
import { yarg } from './config/plugins/args.plugin'

const { b:base, l:limit, s:show } = yarg
console.log(yarg)
console.log(base, limit, show)

let tabla: string = ''
const title: string = `
==========================
      Tabla del ${ base }
==========================\n
`

for (let i = 1; i <= limit; i++) {
  tabla += `${ base } x ${i} = ${base * i}\n`
}

tabla = title + tabla
if (show) {
  console.log(tabla)
}

const outputPath = `autputs`

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, tabla)

// grabar en el archivo de salida
// path: outputs/tabla-5.txt
