var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

function start(response) {
  console.log("Request handler 'start' was called");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(body);
}

function upload(response, request) {
  console.log("Request handler 'upload' was called");

  var form = new formidable.IncomingForm();
  form.parse(request, function(err, fields, files) {
    fs.createReadStream(files.upload.path).pipe(fs.createWriteStream('./tmp/tmp.png'));    
  });  

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end('Received image: <br/> <img src=\'/show\'>');

}

function show(response) {
  console.log("Request handler 'show' called");
  fs.readFile('./tmp/tmp.png', 'binary', function(err, file){
    if(err) {
      response.writeHead('500', {'Content-Type': 'text/plain'});
      response.end(err + '\n');
    }
    else {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.end(file, 'binary');
    }
  });
}
exports.start = start;
exports.upload = upload;
exports.show = show;
