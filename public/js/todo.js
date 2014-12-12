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
  function itemsLeft() { // create a function 
    var count = $(".item").length; //create a count var that finds the length of .item
    return count; // return the count
  }
  function itemsCompleted() {
    var count = $(".strike").length;
    return count;
  }

  function updateStatus(count, completed) {
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
        
        //TO DO-goal is update div#count with text & item in list
        var count = itemsLeft(); //create a count var to find out the itemsLeft
        var completed = itemsCompleted();
        updateStatus(count, completed);
        
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
      var completed = itemsCompleted();
      updateStatus(count, completed);  
    });//end of this.checked




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



