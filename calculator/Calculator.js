var Scores="<input type='text' class='form-control inputText' id='text'"
var HowMany= "#students.val";


$(function(){
    
    addEvent();
    
});
var addEvent = function(){
   $(".btn-sub").click(function(){
      $(".Score").append(Scores);
  });
};

var calculate = function(){
    $(".btn-cal").click(function(){
        $(".Score").mult(Scores);
    })
}