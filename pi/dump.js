var dump = require("./cache/dump")
var argv = require('yargs')
  .alias("d", "delay")
  .default("d", 0)
  .argv

var delay = argv.delay
console.log("Wait " + delay + "s")
setTimeout(function(){
  console.log("start")
  dump()
}, delay * 1000)