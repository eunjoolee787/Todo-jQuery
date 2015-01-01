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
      var userInput = $("#userInput").val();
      var newLiElement = $("<li>");
      
      newLiElement.addClass("todos");
      newLiElement.text("  " + userInput);

      var newCheckBox = $("<input>");
      newCheckBox.attr('type', 'checkbox');
      newCheckBox.addClass("checkBox");

      newLiElement.prepend(newCheckBox);

      $("#tasksList").append(newLiElement);
      $(this).val("");
    }
    updateCounter();
  });

  $(".checkBox").click(function(event) {
    if(this.checked) {
      $(this).parent().addClass("strike");
    } else {
      $(this).parent().removeClass("strike");
    }
    updateCounter();
  });

  function updateCounter() {
    var itemTotal = $(".todos").length;
    var itemCompleted = $(".strike").length;
    var itemLeft = itemTotal - itemCompleted;

    $(".itemLeft").text(itemLeft);
    $(".itemCompleted").text(itemCompleted);
  }
  updateCounter();

});//end of doc ready






















