
function route(handle, pathname) {
  console.log('About to route a request for ' + pathname);
  if(handle[pathname]) handle[pathname]();
  else console.log('No request handler exists for ' + pathname);
}

exports.route = route;
