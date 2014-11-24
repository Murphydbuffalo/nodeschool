//MAP INCOMING REQUEST BODIES INTO ALL-CAPS PROVIDED IN THE RESPONSE
var http = require('http');
var fileSystem = require('fs');
var mapper = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function(request, response){
  request.pipe(mapper(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

server.listen(port);
