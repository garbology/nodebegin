var http = require('http');

function start(){
  http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello!");
  }).listen(8888);
  console.log('Server has started.');
}

exports.start = start;

