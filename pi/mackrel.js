var ondo = require("./lib/ondo")
var cache = require("./cache/load")()
// var ondo = function(cb){
//   cb(null, 25.4)
// }

var log = function(degree, time){
  console.log(["degree", degree, time].join("\t"))
}
if(cache){
  console.logcache.time
}else{
  ondo(function(err, c){
    var time = Math.ceil(new Date().getTime() / 1000)
    log(c, time)
    process.exit(0)
  })
}
