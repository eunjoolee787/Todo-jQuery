$(function(){
  $("#userInput").keypress(function(event){
      if(event.which == 13){
        alert('You pressed enter!');
        var value = $("#userInput").val();
        var checkbox = $('<input>', {
          type: 'checkbox'
        });
        var list = $('<li>');
        list.append(checkbox);
        list.addClass("item");
        var span = $('<span>');
        span.append(value);
        list.append(span);
        $(".item-list").append(list); // this adds new item to list
        $(this).val(''); // this empty the text field
      }
    });

    $(".item-list").on("click",'input[type="checkbox"]', function(){
      
      if(this.checked){
        $(this).siblings("span").first().addClass("strike");
      } else {
        $(this).siblings("span").first().removeClass("strike");
      }
    });
  });


// notes-understand document.ready
// $(document).ready(function(){
//   $("#userInput").val("hi jon");
// });



