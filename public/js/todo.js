$(function(){
  $("#userInput").keypress(function(event){
      if(event.which == 13){
        alert('You pressed enter!');
        var value = $("#userInput").val();
        $(".item-list").append("<li>"+value+"</li>");
          $(this).val('');
      }
  });
});



