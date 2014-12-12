//INSTRUCTIONS-LEVEL 1
// In todo.js add an eventlistener on the text input field that listens for the [enter] key to be pressed. (okay)
// when this event triggers, (okay)
// adds the value of the text input, (okay)
// as a new list item, (okay)
// only when the text input field is in focus. (???)
// once the new list item has been created and appended to the todo list, (???)
// erase the value of the text input field (okay)

//INSTRUCTIONS-LEVEL 2
//In index.html add standard check boxes to the left of each list item.

$(function(){ //$(document).ready() shortcut

//Add working counter that shows how many items the user has left to do.  
  function itemsLeft() { // create a function to contain itemsLeft
    var count = $(".item").length; //create a count var that gets the length of .item
    return count; // return the count
  }
  function itemsCompleted() { //create a function to contain itemsCompleted
    var count = $(".strike").length; //create a count var that gets the length of .strike
    return count; //return the count
  }

  function updateStatus(count, completed) { //create a function to contain updateStatus
    $("div#count").text(count + " items in list, " + completed + " items completed"); //create div#count and add text that shows the count in the list
  }

  $("#userInput").keypress(function(event){ //add an eventlistener on the text input field that listens for the [enter] key to be pressed. (okay)
      if(event.which == 13){ //when this event triggers (okay)
        //alert('You pressed enter!'); //  //TESTER ONLY!
        var userInput = $("#userInput").val(); //create var of when user inputs data

        var newToDo = $('<li>'); //create a new li element with jquery
        newToDo.addClass("item"); //adding a class to the new li item
        
        var span = $('<span>'); //create a new span and saving it to a variable to use later
        span.append(userInput); //append(put into) userInput into span
        newToDo.append(span); //append(put into) span into new li item
        
        var checkbox = $('<input>', {  //create a new input-checkout and saving it to a variable to use later
          type: 'checkbox' //assigning attributes
        });
        newToDo.prepend(checkbox); //append checkbox to the new li item

        // add elements to DOM
        $(".item-list").append(newToDo); //append newToDo into the .item-list

        $(this).val(''); // erase the userInput of the text input field (okay)
        
        //Goal is update div#count with text & item in list
        var count = itemsLeft(); //create a count var to get the itemsLeft
        var completed = itemsCompleted(); //create a var to get the itemsCompleted
        updateStatus(count, completed); //create a updateStatus
        
      } //end of .keypress
  }); //end of function

//INSTRUCTIONS-LEVEL 2
//In todo.js add an event listener that strikes out the todo item if it's checkbox has been checked:
  $(".item-list").on("click",'input[type="checkbox"]', function(){//when the item is click, make a checkbox function
    
    if(this.checked){//if the checkbox is checked
      $(this).siblings("span").first().addClass("strike");//return checkbox of span and ADD "strike" to the first selection
    } else {//else 
      $(this).siblings("span").first().removeClass("strike");//else return checkbox of span and REMOVE "strike" to the first selection
    }//end of .siblings
    var count = itemsLeft(); //create a count var to find out the itemsLeft
    var completed = itemsCompleted(); //create a completed var to find the itemsCompleted
    updateStatus(count, completed);  
  });//end of this.checked

  $("#saveButton").on("click", function() { //create a #saveButton onclick function
    // console.log("click");
    var tasksCollection = []; // create a taskCollection array

    $(".item").each(function(index, element) { //create a function that checks each .item of index, element
        //console.log(index, element);
        var item = {}; //create a item var to store index & elements
        // console.log($(element).find("span").text());
        // console.log($(element).find("span").hasClass("strike"));
        item.title = $(element).find("span").text(); //create a title to the var item and find the elements, then find the text in the span
        item.completed = $(element).find("span").hasClass("strike");//create a completed to the var item and find the elements, then find the span and any class of "strike" to see if true or false.
        // console.log(item);
        tasksCollection.push(item); //now push(add) item to var tasksCollection.
    });
    // console.log(tasksCollection);
    var data = { //create a var data to store data
      list_to_save: JSON.stringify(tasksCollection) //stringify the tasksCollection to list_to_save.
    }
    $.post("/save", data, function(data) { //post the data 

    });
  });//end of #saveButton


  // $("button#save").click(function (e) {
    
  //  var list = [];
  //  $("#list_container ul li").each(function (i, obj){
  //   // console.log('obj', $(obj).find("span".html() );
  //   list.push({
  //     index: i,
  //     title: $(obj).find("span".html() );
  //     completed: $(obj).find("input:checked").length > 0);
  //   });
  //  });

  // var json = JSON.stringify(list);

  //   $.post("/save", 
  //   {
  //     todo_json_data: json
  //   }
  // });
  // });

  });//end of function

// notes-understand document.ready
// $(document).ready(function(){
//   $("#userInput").val("hi jon");
// });



