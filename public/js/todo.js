$(function(){
  $("#userInput").keypress(function(event){
      if(event.which == 13){
        alert('You pressed enter!');
        var value = $("#userInput").val();
        var checkbox = $('<input>', {
          type: 'checkbox'
        });
        var list = $('<li>', {
          html: checkbox
        });
        list.append(value);
        $(".item-list").append(list);
      }
    });
  });


// notes-understand document.ready
// $(document).ready(function(){
//   $("#userInput").val("hi jon");
// });



