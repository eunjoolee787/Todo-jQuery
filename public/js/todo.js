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
$(function(){ //jquery
  $("#userInput").keypress(function(event){ //add an eventlistener on the text input field that listens for the [enter] key to be pressed. (okay)
      if(event.which == 13){ //when this event triggers (okay)
        //alert('You pressed enter!'); //  //TESTER ONLY!
        var value = $("#userInput").val(); //create var of when user inputs data
        var checkbox = $('<input>', {  //create var of checkbox
          type: 'checkbox' //object of checkbox
        });
        var list = $('<li>'); //create a list of li's
          list.append(checkbox); //adds the value of the text input, (okay)
          list.addClass("item"); //as a new list item, (okay)
        var span = $('<span>'); //create a var called span's
          span.append(value); //add the value to the span's
          list.append(span); //add the span's to the list's
        $(".item-list").append(list); // this adds new item to list
        $(this).val(''); // erase the value of the text input field (okay)
      } //end of .keypress
  }); //end of function

//INSTRUCTIONS-LEVEL 2
//In todo.js add an event listener that strikes out the todo item if it's checkbox has been checked:
    $(".item-list").on("click",'input[type="checkbox"]', function(){//when the item is click, make a checkbox function
      
      if(this.checked){//if the checkbox is checked
        $(this).siblings("span").first().addClass("strike");//return checkbox of span and ADD "strike" to the first selection
      } else {//else 
        $(this).siblings("span").first().removeClass("strike");//else return checkbox of span and REMOVE "strike" to the first selection
      }
    });
  });

// notes-understand document.ready
// $(document).ready(function(){
//   $("#userInput").val("hi jon");
// });



