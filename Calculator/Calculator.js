$(function(){
    
    addEvent();
    
});
var addEvent = function(){
   $(".btn-sub").click(function(){
      $(".Score").append("<input type='text' class='form-maker' id='textbox'>");
  })
};