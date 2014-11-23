// PRINT THE CONTENTS OF THE COMPLETE HTTP RESPONSES FOR THREE SEPARATE REQUESTS
// THE RESPONSES MUST BE PRINTED IN THE ORDER THE REQUESTS WERE MAD
// NOT THE ORDER IN WHICH THEY WERE RETURNED

var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var completedResponses = 0;
var responseBodies = [];

function collectResponseBody(response, order){
  var body = '';

  response.setEncoding('utf8');

  response.on('data', function(data){
    body += data;
  });

  response.on('end', function(){
    responseBodies[order - 1] = body;
    completedResponses++

    if(completedResponses === 3){
      for(var i = 0; i < 3; i++){
        console.log(responseBodies[i]);
      }
    }
  });
};

http.get(url1, function(response){
  collectResponseBody(response, 1);
});

http.get(url2, function(response){
  collectResponseBody(response, 2);
});

http.get(url3, function(response){
  collectResponseBody(response, 3);
});
