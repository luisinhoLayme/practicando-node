
console.log('Inicio')

setTimeout(() => {
  console.log('primer timeout')
}, 3000)

setTimeout(() => {
  console.log('segundo timeout')
}, 1)

setTimeout(() => {
  console.log('tercer timeout')
}, 0)

console.log('Fin ')

