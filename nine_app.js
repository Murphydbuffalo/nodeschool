//PRINT OUT THE CURRENT DATE AND TIME FOR EACH CONNECTION MADE TO A TCP SERVER
var net = require('net');
var server = net.createServer(function(socket){
  var date = new Date();
  var year = date.getFullYear();
  var month = (date.getMonth() + 1);
  if(+month < 9) { month = '0' + month };  

  var day = date.getDate();
  if(+day < 10) { day = '0' + day };

  var hour = date.getHours();
  if(+hour < 9) { hour = '0' + hour };  

  var minute = date.getMinutes();
  if(+minute < 10) { minute = '0' + minute };  

  var output = '' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n'; 
  
  socket.end(output, function(){
    console.log(output);
  });
});

server.listen(process.argv[2]);
