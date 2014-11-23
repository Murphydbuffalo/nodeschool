// READ IN A FILE WITH BLOCKING (SYNCHRONOUS CODE) AND COUNT ITS NEWLINES
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var string = buffer.toString();

var numberOfNewlines = string.split("\n").length - 1; 

console.log(numberOfNewlines);
