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
    if(event.which === 13) {
      var userInput = $("#userInput").val();
      var newLiElement = $("<li>");
      newLiElement.addClass("tasks");
      newLiElement.text("" + userInput);

      var newCheckBox = $("<input>");
      newCheckBox.attr("type", "checkbox");
      newCheckBox.addClass("checkBox");

      newLiElement.prepend(newCheckBox);

      $("#taskList").append(newLiElement);
      $(this).val();
    }
  });
    //if event
    
      //var userInput jquery
      //var new Li element
     

      //add new class   
      //add text to #userInput
      

      //create var input      
      //create attr     
      //add Class     

      //prepend  

      //append newLiElement
      //erase .val
   
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
    var taskListItems = $("ul#taskList li"); //array of <li> items
    var dataStorage = [];

    for(var i = 0; i < taskListItems.length; i++) {
      var item = $(taskListItems[i]);

      var taskObject = {
        "title": item.text().trim(),
        "completed": item.find("input:checkbox").prop("checked")
      };
      dataStorage.push(taskObject);
    } 
    console.log(dataStorage);
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





















