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
        $("#bio").toggle();
    });        
        $("button").click(function(){
        $(".L").fadeToggle();
    });
});
