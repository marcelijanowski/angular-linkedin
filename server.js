var app, express, fs, port;

express = require('express');
fs = require('fs');
app = express();
port = process.env.PORT || 8000;

process.env.PWD = process.cwd();

app.configure(function () {
  app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    return next();
  });
  return app.use('/', express.static(process.env.PWD + '/public'));
});

app.options('*', function (request, response, next) {
  return response.send(200);
});

app.all('*', function (request, response, next) {
  return response.sendfile(process.env.PWD + '/public/index.html');
});

app.listen(port, function () {
  return console.log('Listening on port: ' + port);
});
