var fs = require("fs")
var cache = "./cache.json"
// var ondo = function(cb){
//   cb(null, 25.4, new Date().getTime())
// }

module.exports = function(c, time){
  var data = JSON.stringify({
    degree: c,
    time: time
  })
  fs.writeFileSync(cache, data)
}