var fs = require("fs");
var bodyParser = require('body-parser');
var express = require('express');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var app = express();
var CONNECTION_STRING = 'mongodb://localhost:27017/todosdb';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

// app.get('/', function (req, res) {
//   res.send('Hello World!')
//   res.rend('index');
// })
function connect_to_db ( cb ) {
  MongoClient.connect(CONNECTION_STRING, function(err, db) {
    if (err) {
      throw err;
    }
    var collection = db.collection('todos');

    cb(collection);

  });
}


app.post('/item', function (req, res) {

  connect_to_db(function (collection) {

    var new_todo_item_to_be_inserted = req.body.new_item;

    collection.insert(new_todo_item_to_be_inserted, function (err, obj) {
      
      console.log('err',err);
      console.log('obj',obj);
      res.send(obj);
    });//end of collection.insert
  });//end of connect_to_db
});//end of app.post


app.get('/items', function (req, res) {
  
  connect_to_db( function ( collection ) {

    collection.find({}).toArray(function(err, docs) {
      
      console.log("Found the following records");
      console.dir(docs);
      res.send(docs);
    });
  
  });

});

/*
  UPDATE completed status
  PUT /items/:id/:status
 */
app.put('/items/:id/:status',function (req, res) {
  
  connect_to_db( function ( db, collection ) {
    var todo_id = req.params.id;
    var todo_completed_status = req.params.status;

    // collection.update(criteria, objNew, options, [callback]);
    collection.update(
      { '_id' : new ObjectID(todo_id) },    // criteria
      {
        $set: {
          completed : todo_completed_status
        }
      },                                    // objNew
      {w:1},                                // options
      function(err) {                       // callback
        var success;
        if (err){
          success = false;
          console.warn(err.message);
        }else{
          success = true;
          console.log('successfully updated');
        }

        db.close();
        res.json( { success : success } );
      }
    );
  });

});
app.delete('/items/:item_id', function (req, res) {
  
  connect_to_db( function ( collection ) {

    var _id = req.params.item_id;

    collection.remove({"_id": new ObjectID(_id)}, function (err, result) {
      if(err) throw err;
      //console.log("Found the following records");
      //console.dir(docs);
      res.json({ success: "success" });

      collection.db.close();
    });
  
  });

});


//install #5
// Note the db name todosdb in the connection string
  // MongoClient.connect('mongodb://localhost:27017/todosdb', function(err, db) {
  //     if (err) {
  //       throw err;
  //     }

  //   // Find the collection todos (or create it if it doesn't already exist)
  //   var collection = db.collection('todos');

    // Insert a document into the collection
    // collection.insert({
    //   index: 1,
    //   title: "Connect to MongoDB server",
    //   completed: true
    // }, function(err, arrayItem) {
      // Show the item that was just inserted; contains the _id field
      // Note that it is an array containing a single object
  //     console.log(arrayItem);

  //     // Log the number of items in the collection
  //     collection.count(function(err, count) {
  //       console.log("count = " + count);
  //     });

  //     // Locate all the entries using find
  //     collection.find().toArray(function(err, results) {
  //       console.log(results);

  //       // Close the db connection
  //       db.close();
  //     });
  //   }); // End of function(err, docs) callback
  // });
   
  // console.log('user sent post request');
  // // console.log(req.body);
  // saveToDoList(req.body.list_to_save);
  // res.send("puppies");
  // // res.json({status: "succcess"});

  // // fs.writeFile("list.json");


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









