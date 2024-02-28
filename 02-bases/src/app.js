const { getUuid, getAge, buildLogger } = require('./plugins')

// const { emailTemplate } = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')

// const getPokemonById = require('./js-foundation/06-promises')

// getPokemonById(10)
//   .then((pokemon)=> console.log({pokemon}))
//   .finally(() => console.log('finally'))

const logger = buildLogger('app.js')

logger.log('luisinho pro')
logger.error('luisinho error')




//PERF: referencia a la funcion factoroy y uso

// const { builMakePerson } = require('./js-foundation/05.factory')
//
// const makePerson = builMakePerson({ getUuid, getAge })
//
// const obj = { name: 'Luis', birthdate: '1994-02-20' }
// const john = makePerson(obj)
// console.log(john)

