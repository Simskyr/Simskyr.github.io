$(document).ready(function(){
    $(".test").click(function(){
        $(".pict").animate({
            height: 'toggle'
        });
    });
    $(".info").click(function(){
        $("#info").toggle();
    });
        $(".bio").click(function(){
        $("#bio").fadeIn();
    });
});