var cacheWrite = require("./cache/write")
var ondo = require("./lib/ondo")
// var ondo = function(cb){
//   cb(null, 25.4)
// }

ondo(function(err, degree, time, data){
  console.log(data)
  process.exit(0)
})
