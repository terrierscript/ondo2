var ondo = require("./lib/ondo")
var fs = require("fs")
var cache = "./cache.json"
// var ondo = function(cb){
//   cb(null, 25.4)
// }
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