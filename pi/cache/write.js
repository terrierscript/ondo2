var ondo = require("../lib/ondo")
var fs = require("fs")
var cache = "./cache.json"
// var ondo = function(cb){
//   cb(null, 25.4, new Date().getTime())
// }

module.exports = function(c, ts){
  var data = JSON.stringify({
    degree: c,
    time: time
  })
  fs.writeFile(cache, data, function(){
    process.exit(0)
  })
}