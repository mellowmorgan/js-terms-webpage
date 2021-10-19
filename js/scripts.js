$(document).ready(function(){
  $(".clickable").click(function(){
    $(".def-hidden").toggle();
    $(".def-showing").toggle();

  });
  $(".clickable-2").click(function(){
    $(".def-hidden-2").toggle();
    $(".def-showing-2").toggle();

  });
  $(".clickable-3").click(function(){
    $(".def-hidden-3").toggle();
    $(".def-showing-3").toggle();

  });

  $(".clickable-4").click(function(){
    $("#def-hidden-4").toggle();
    $("#def-showing-4").toggle();

  });
});
