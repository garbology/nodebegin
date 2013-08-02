function start(response) {
  console.log("Request handler 'start' was called");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello from start request handler!");
}

function upload(response) {
  console.log("Request handler 'upload' was called");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello from upload request handler!");
}

exports.start = start;
exports.upload = upload;
