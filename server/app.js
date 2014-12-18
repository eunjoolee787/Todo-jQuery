var bodyParser = require('body-parser');
var express = require('express');
// var mongodb = require('mongodb');
// var MongoClient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var app = express();
var mongoose = require('mongoose');

//var CONNECTION_STRING = 'mongodb://localhost:27017/todosdb';
var CONNECTION_STRING = 'mongodb//root:' + process.env.DBPASS + 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect(CONNECTION_STRING);

//var Model = mongoose.model('Model');

var todoSchema = mongoose.Schema({
  title: String,
  cmpleted: Boolean
});

var Todo = mongoose.model('TodoItem', todoSchema);

app.get('/items', function (req, res) {
  Todo.find(function(err,todos) {
    if(err) {
      else {
        res.send(todos)
    }
  });
  Todo.find(callback);

//   connect_to_db (function (db, collection) {

//     collection.find({}).toArray(function (err, docs) {
//       db.close();

//       if(err) throw err;
//       console.log('docs', docs);
//       res.send(docs)
//     });//end of collection.find
//   });//end of connect_to_db
// });//end of app.get

function connect_to_db ( cb ) {
  MongoClient.connect(CONNECTION_STRING, function(err, db) {
    if (err) {
      throw err;
    }
    var collection = db.collection('todos');

    cb(db, collection);

  });//end of MongoClient.connect
}//end of connect_to_db


app.post('/items', function (req, res) {
  var todo = new Tod(req.body.new_item);

  todo.save(function(err) {
    if (err) {
      throw err;
    } else {
      res.send(todo._id);
    }
  });

//   connect_to_db(function (db, collection) {

//     var new_todo_item_to_be_inserted = req.body.new_item;

//     collection.insert(new_todo_item_to_be_inserted, function (err, docs) {
      
//       // console.log('err',err);
//       // console.log('obj',obj);
//       //res.send(obj);
//       db.close();
//       res.send(docs[0]._id);
//     });//end of collection.insert
//   });//end of connect_to_db
// });//end of app.post




/*
  UPDATE completed status
  PUT /items/:id/:status
 */
app.put('/items',function (req, res) {

  // update(queryingFor, whatYouWantToChange, callback)
  Todo.update({
    "_id": new ObjectID(req.body._id)
  }, {
    "completed": req.body.completed
  }, function(err) {
    if(err) {
      throw err;
    }
    else {
      res.send("Todo item was successfully update");
    }
  }


  
//   connect_to_db( function ( db, collection ) {
//     var todo_id = req.params.id;
//     var todo_completed_status = req.params.status;

//     // collection.update(criteria, objNew, options, [callback]);
//     collection.update(
//       { '_id' : new ObjectID(todo_id) },    // criteria
//       {
//         $set: {
//           completed : todo_completed_status
//         }
//       },                                    // objNew
//       {w:1},                                // options
//       function(err) {                       // callback
//         var success;
//         if (err){
//           success = false;
//           console.warn(err.message);
//         }else{
//           success = true;
//           console.log('successfully updated');
//         }

//         db.close();
//         res.json( { success : success } );
//       }//end of function(err)
//     );//end of collection.update
//   });//end of connect_to_db
// });//end of app.put


app.delete('/items/:id', function (req, res) {
//remove(whatYouWantQueryingFor, callback)

Todo.remove({
  "_id": req.params.item_id
 }, function(err) {
    if(err) {
      throw err;
    }
    else {
      res.send("Todo item was successfully update");
    }
  }
//   connect_to_db( function ( db, collection ) {

//     var _id = req.params.id;

//     collection.remove({"_id": new ObjectID(_id)}, function (err, result) {
//       if(err) throw err;
//       db.close();
//       res.json({ success: "success" });
//     });//end of collection.remove  
//   });//end of connect_to_db
// });//end of app.delete


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


// function saveToDoList(content){
// // fs = require('fs');
//   fs.writeFile('./public/todo_save.json', content, function (err) {
//     if (err) return console.log(err);
//     console.log('Successfully saved todo_save.json');
//   });
// }
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

});//end of app.listen









