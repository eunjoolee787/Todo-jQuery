var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

// app.get('/', function (req, res) {
//   res.send('Hello World!')
//   res.rend('index');
// })

app.post('/save', function (req, res) {
 
  console.log('user sent post request');
  // console.log(req.body);
  saveToDoList(req.body.list_to_save);
  res.send("puppies");
  // res.json({status: "succcess"});

  // fs.writeFile("list.json");

});
function saveToDoList(content){
// fs = require('fs');
  fs.writeFile('./public/todo_save.json', content, function (err) {
    if (err) return console.log(err);
    console.log('Successfully saved todo_save.json');
  });
}
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});









