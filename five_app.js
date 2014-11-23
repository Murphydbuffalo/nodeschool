//  USING A MODULE, LOG FILES FROM A GIVEN DIRECTORY FILTERED BY FILE TYPE

var printFiles = require('./print_files');

function logFileNames(error, data){
  if(!error){
    for(var i = 0, length = data.length; i < length; i++){
      console.log(data[i]);
    }    
  } else {
      console.log("There was an error:  " + error.toString());
  }
}

printFiles(process.argv[2], process.argv[3], logFileNames);
