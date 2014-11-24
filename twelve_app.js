//RETURN JSON CONTAING THE TIME OF THE CURRENT REQUEST
var http = require('http');
var nodeURL = require('url');

var server = http.createServer(function(request, response){
  var url = nodeURL.parse(request.url, true);
  var path = url.pathname;
  var isoDate = url.query.iso;
  var time = new Date(isoDate);

  if(path === '/api/parsetime') {
    timeObject = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  } 
  else if(path === '/api/unixtime') {
    timeObject = { 'unixtime': time.getTime() }
  }

  response.writeHead(200, {'Content-Type': 'application/json' });
  response.end(JSON.stringify(timeObject));
});

server.listen(process.argv[2]);
