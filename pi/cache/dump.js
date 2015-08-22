var ondo = require("../lib/ondo")
var fs = require("fs")
var cache = "./cache.json"
module.exports = function(){
  ondo(function(err, c, ts){
    var time = ts
    var data = JSON.stringify({
      degree: c,
      time: time
    })
    fs.writeFile(cache, data, function(){
      process.exit(0)
    })
  })
}