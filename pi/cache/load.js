module.exports = function(){
  try{
    var cache = require("../cache.json")
    return cache
  }catch(e){
  }
  return null
}