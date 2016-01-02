const axios = require("axios")
const url = "https://ondosan.herokuapp.com/"
// const url = "http://localhost:5000/"

export function fetchDegree(){
  return axios.get(url).then((response) => {
    return response.data.metrics.reverse()
  })
}
