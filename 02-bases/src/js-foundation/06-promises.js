const { http } = require('../plugins')

const getPokemonById = async (id) => {
  try {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get( url )

    // const resp = await fetch(url)
    // const data = await resp.json()
    // console.log(data.name)
    // throw new Error('Pokemon no exists')

    return pokemon.name
  } catch (err) {
    console.log(err)
  }
}

module.exports = getPokemonById

