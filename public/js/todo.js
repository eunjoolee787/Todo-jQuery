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
    if(event.which == 13) {
      var userInput = $("#userInput").val();
      var newLiElement = $("<li>");
    }
    newLiElement.addClass("tasks");
    newLiElement.text("" + userInput);

    var newCheckBox = $("<input>");
    newCheckBox.attr("type", "checkbox");
    newCheckBox.addClass("checkbox");

    newLiElement.prepend(newCheckBox);

    $("#taskList").append(newLiElement);
    $(this).val();
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
   
$(".checkBox").click(function(event) {
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





















