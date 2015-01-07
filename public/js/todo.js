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
      newLiElement.text("" + userInput);

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
    updateCounter();
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






















