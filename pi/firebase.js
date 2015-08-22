var Firebase = require('firebase')
var Degrees = new Firebase("https://torid-fire-7950.firebaseio.com/degree_log");
var ondo = require("./lib/ondo")
var cache = require("./cache/load")()

var send = function(err, degree, time){
  var time = new Date(time).toString()
  var data = {
    degree: c,
    error: err,
    time: time
  }
  console.log(data)
  Degrees.push(data, function(err){
    console.log(err)
    process.exit(0)
  })
}
ondo(function(err, c, time){
  send(err, c, time)
})
