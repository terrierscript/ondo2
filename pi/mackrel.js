var cacheWrite = require("./cache/write")
var ondo = require("./lib/ondo")
// var ondo = function(cb){
//   cb(null, 25.4)
// }

ondo(function(err, degree, time){
  cacheWrite(degree, time)
  var time = Math.ceil(new Date(time).getTime() / 1000)
  console.log(["degree", degree, time].join("\t"))
  process.exit(0)
})
