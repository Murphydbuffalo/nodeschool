var fs = require('fs');
var path = require('path');
var data = [];

module.exports = function printFiles(directory, fileType, callback){
  fs.readdir(directory, function(err, files){
    if(err){
      return callback(err);
    }

    for(var i = 0, length = files.length; i < length; i++){
      if(path.extname(files[i]) === "." + fileType){
        data.push(files[i]);
      }
    }
    callback(null, data);
  });
};
