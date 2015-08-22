var Firebase = require('firebase')
var Degrees = new Firebase("https://torid-fire-7950.firebaseio.com/degree_log");
var cache = require("./cache/load")

var send = function(err, degree, time){
  var time = new Date(time).toString()
  var data = {
    degree: degree,
    error: err,
    time: time
  }
  console.log(data)
  Degrees.push(data, function(err){
    console.log(err)
    process.exit(0)
  })
}
setTimeout(function(){
  var ondo = require("./lib/ondo")
  ondo(function(err, degree, time){
    send(err, degree, time)
  })
}, 20 * 1000)
