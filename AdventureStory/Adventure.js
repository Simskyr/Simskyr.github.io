$(function(){
  
    question1();
    
});

var question1 = function(){
  
  //UPDATING GRAPHICS
  $("div.narrative, span.q1").html("Are you ready to go kill the one known as  bob?");
  $(".q1").show();
  $(".buttons").html("<button class='btn btn-primary q1-yes'> YES </button>");
  $(".buttons").append("<button class='btn btn-primary q1-no'> NO </button>");
  
  //MAKE IT WORK
  $(".q1-yes").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("YES").show();
      //Run Question 2
      question2();
    });
   $(".q1-no").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("NO").show();
      //Run Question 2
      $(".narrative").html("You Do Not Know Da Wae Spit On Him Bruddas");
    });
  
};

var question2 = function(){
  
  //UPDATE GRAPHICS
  $("div.narrative, span.q2").html("You’re in the village ready to leave which way do you go?");
  $(".q2").show();
  $(".buttons").html("<button class='btn btn-primary q2-beach'>Left goes to a beach</button>");
  $(".buttons").append("<button class='btn btn-primary q2-cave'>Right goes into a cave</button>");
  $(".buttons").append("<button class='btn btn-primary q2-forest'>Straight ahead into the forest</button>");
  
  //MAKE IT WORK
  $(".q2-beach").click(function(){
      $(".q2-choice").html("Beach").show();
      question3("You decided to take the beach which was the shortest route on your way you see a giant enemy crab and it looks like it's about to attack a small town nearby what do you do");
  });
  
  $(".q2-cave").click(function(){
      $(".q2-choice").html("Cave").show();
      $(".narrative").html("You died");
    });
  
  $(".q2-forest").click(function(){
      $(".q2-choice").html("Forest").show();
      question4("You decied you want to take the forest so you wont have to deal with the random giant sea creatures but as you walk through the forest a crazy rabid squirrel jumps out from a tree and starts running towards what do you do.");
  });
  
};

var question3 = function(q2_choice){
    $("div.narrative, span.q3").html( q2_choice );
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-primary q3-beach'>Do you try to stay and fight possibly even die</button>");
    $(".buttons").append("<button class='btn btn-primary q3-beach'>Or do you leave going streight to BOB in his beach castle</button>");
};

$(".q3-beach").click(function(){
      $(".q3-choice").html("Beach").show();
      question3(" ");
  });
var question4 = function(q2_choice){
    $("div.narrative, span.q3").html( q2_choice );
    $(".q4").show();
    $(".buttons").html("<button class='btn btn-primary q3-forest'>forest op 1</button>");
    $(".buttons").append("<button class='btn btn-primary q3-forest'>forest op 2</button>");
};


  
  $(".q4-forest").click(function(){
      $(".q4-choice").html("Forest").show();
      question4(" ");
  });
  
var displayChoice = function(finalAnswer, gameOption){
    $(".q3-choice").html(finalAnswer).show();
    $(".narrative").html(gameOption);
    $(".buttons").hide();
  
};

