
function route(handle, pathname, response) {
  console.log('About to route a request for ' + pathname);
  if(handle[pathname]) handle[pathname](response);
  else {
    console.log('No request handler exists for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end("404 Not Found");
  }
}

exports.route = route;
