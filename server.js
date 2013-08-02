var http = require('http');
var url= require('url');

function start(route, handle){
  http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    var postData = "";
    console.log('Request for ' + pathname + ' received');

    request.setEncoding('utf8');

    request.addListener('data', function(data) {
      postData += data;
      console.log('Received POST data chunk ' + data + '.');
    });

    request.addListener('end', function() {
      route(handle, pathname, response, postData);    
    });

  }).listen(8888);
  console.log('Server has started.');
}

exports.start = start;

