/*
- Add event Listener to INPUT Field x
- event listener should only add when ENTER key is pressed x
- get VALUE of INPUT field when enter key is pressed x
- BUILD NEW LI ITEM with INPUT value x
- ALL OF ABOVE ONLY HAPPENS WHEN INPUT FIELD IS IN FOCUS
 */

$(function() {

  //keypress function
  $("#userInput").keypress(function(event) {
    //if event
    if(event.which == 13) {
      // console.log("hi");

      //var userInput jquery .val
      var userInput = $("#userInput").val();
      //var new Li element
      var newLiElement = $("<li>");

      //add new class   
      newLiElement.addClass("tasks");
      //add text to #userInput
      newLiElement.text(userInput);

      //create var input element jquery     
      var newCheckBox = $("<input>");
      //create attr     
      newCheckBox.attr("type", "checkbox"); 
      //add Class     
      newCheckBox.addClass("checkBox");
      
    
      //prepend  
      newLiElement.prepend(newCheckBox);

      //append newLiElement
      $("#taskList").append(newLiElement);
      //erase .val
      $(this).val();
    }
  });

  $("body").on("click", ".checkBox", function() {
    if(this.checked) {
      $(this).parent().addClass("strike");
    } else {
      $(this).parent().removeClass("strike");
    }
    updateCounter();
  });




  //create click function
  
  //create if checked
    
  //if add class parent
   
  //else remove class parent
  
$("#save").click(function(event) {
  //var array of <li> items
  var tasksArray = $("li.tasks");
  //var dataStorage
  var dataStorage = [];

  //for loop
  for(var i = 0; i < tasksArray.length; i++) {
    //var taskObject
    var taskObject = {
      //title: .text
      title: $(tasksArray[i]).text().trim(),
      //completed: .find  .prop
      completed: $(tasksArray[i]).find(".checkBox").prop("checked")
    };
    //.push
    dataStorage.push(taskObject);
  }
  //CL
  // console.log(dataStorage);
  var data = {
    list_to_save: JSON.stringify(dataStorage)
  }
  $.post("/save", data, function(data) {

  });
});


  //function updateCounter
function updateCounter() {
  var itemTotal = $(".tasks").length;
  var itemCompleted = $(".strike").length;
  var itemLeft = itemTotal - itemCompleted;

  $(".itemLeft").text(itemLeft);
  $(".itemCompleted").text(itemCompleted);
}
updateCounter();

  //create var itemTotal

  //create var itemCompleted

  //create var itemLeft

  //create jquery text itemLeft

  //create jquery text itemCompleted

  //updateCounter

});//end of doc ready






















