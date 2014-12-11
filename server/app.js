var express = require('express');
var app = express();

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.send('Hello World!')
//   res.rend('index');
// })

app.post('/save', function (req, res) {
 
  console.log('user sent post request');
  res.send("ok");

  // fs.writeFile("list.json");
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});