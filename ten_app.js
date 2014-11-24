//Pipe a given file from the file system to the response body for every HTTP request
var http = require('http');
var fileSystem = require('fs');
var port = process.argv[2];

var server = http.createServer(function(request, response){
  var file = fileSystem.createReadStream(process.argv[3]);
  file.pipe(response);
});

server.listen(port);
