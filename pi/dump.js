var dump = require("./cache/dump")
var argv = require('yargs')
  .alias("d", "delay")
  .default("d", 0)
  .argv

var delay = argv.delay
setTimeout(function(){
  dump()
}, delay * 1000)