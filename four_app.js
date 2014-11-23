// ASYNCHRONOUSLY LOG OUT FILE NAMES FROM A GIVEN DIRECTORY, FILTERED BY FILE TYPE
var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileType = process.argv[3];

fs.readdir(directory, function logFiles(err, data){
  if(!err){
    for(var i = 0, length = data.length; i < length; i++){
      if(path.extname(data[i]) === "." + fileType){
        console.log(data[i]);
      }
    }
  } else {
    console.log("Something went wrong: \n" + err);
  }
});
