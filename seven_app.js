// PRINT THE ENTIRE RESPONSE BODY AND NUMBER OF CHARACTERS

var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
  var output = '';
  response.setEncoding('utf8');

  response.on('data', function(data){
    output += data;
  });

  response.on('end', function(){
    console.log(parseInt(output.length));
    console.log(output);
  });
});
