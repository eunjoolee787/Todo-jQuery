/*
- Add event Listener to INPUT Field x
- event listener should only add when ENTER key is pressed x
- get VALUE of INPUT field when enter key is pressed x
- BUILD NEW LI ITEM with INPUT value x
- ALL OF ABOVE ONLY HAPPENS WHEN INPUT FIELD IS IN FOCUS
 */

$(function () {

  $("#userInput").keypress(function(event) {
    if(event.which == 13) {
      // console.log("hi");
      var userInput = $("#userInput").val();
      var newLiElement = $("<li>", {
        class: "input",
        text: userInput
      });
      $("#tasks").append(newLiElement);
      $(this).val("");
    }
  });
});























