
module.exports = function(cb){
  try{
    var cache = require("../../cache.json")
    cb(null, cache.degree, cache.time)
  }catch(e){
    cb(e)
  }
}