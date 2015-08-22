var ondo = require("./lib/ondo")
var cache = require("./cache/load")()
// var ondo = function(cb){
//   cb(null, 25.4)
// }

var log = function(degree, time){
  var time = Math.ceil(new Date(time).getTime() / 1000)
  console.log(["degree", degree, time].join("\t"))
}
if(cache){
  log(cache.degree, cache.time)
}else{
  ondo(function(err, c, time){
    log(c, time)
    process.exit(0)
  })
}
