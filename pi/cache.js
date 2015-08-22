var ondo = require("./lib/ondo")
var fs = require("fs")
var cache = "./cache.json"
var ondo = function(cb){
  cb(null, 25.4)
}
ondo(function(err, c){
  var time = Math.ceil(new Date().getTime() / 1000)
  fs.writeFileSync(cache, JSON.stringify({
    degree: c,
    time: time
  }))
  // console.log(["degree", c, time].join("\t"))
  process.exit(0)
})