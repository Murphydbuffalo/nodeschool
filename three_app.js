// READ IN A FILE WITH NON-BLOCKING (ASYNCHRONOUS CODE) AND COUNT ITS NEWLINES VIA A CALLBACK
var fs = require('fs');
var lines;
fs.readFile(process.argv[2], 'utf8', function(err, data){
  if(!err){
    lines = data.split("\n");
    console.log(lines.length - 1);
  } else {
    console.log("Error!");
  }
});
