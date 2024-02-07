const axios = require('axios')

const httpClientPlugin = {
  get: async(url) => {
    // const resp = await fetch(url)
    // return  await resp.json()
    try {
      const resp = await axios.get(url)
      return  resp.data
    } catch (err) {
      console.log(err)
    }
  },

  post: async(url, body) => {},
  put: async(url, body) => {},
  delete: async(url) => {},

}

module.exports = {
  http: httpClientPlugin,
}
