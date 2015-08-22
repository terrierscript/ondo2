
module.exports = function(cb){
  try{
    var cache = require("../cache.json")
    cb(cache.degree, cache.time)
  }catch(e){
  }
}