console.log("JS attached!");

$(document).ready(function(){

var objectsToHide = ["butterfly_1","window","spider","key","feather","hat","bycicle_2","coffee_cup","mouse","fork"];

var objectsFound = 0;

$('img').click(function(){

if($.inArray(this.className, objectsToHide) != -1){
  $(this).slideToggle(500);
  $('li.' + this.className).css('color', '#A2ADA6');
  objectsFound +=1;
}
});

    window.setInterval(function(){

        var timeCount = parseInt($(".timer").text());

        $(".timer").text(timeCount -1);
            if(timeCount<=0){
              $(window.location).attr("href","game_over.html");
        }
        else if(objectsFound == 10){
          $(window.location).attr("href","winner.html");
        }
    },1000);

        $('.startAgain').click(function(){
      $(window.location).attr("href","start_game.html");
    });
          $('.goToMainPage').click(function(){
      $(window.location).attr("href","index.html");
    });
                    $('.startTheGame').click(function(){
      $(window.location).attr("href","start_game.html");
    });

                    $('.rules').click(function(){
                      alert("Use your observing skills to discover the hidden objects in the room. Don't forget, you've got just 30 seconds to find all the objects. Good Luck!");


                    });


});

// $(document).ready(function(){

// window.setInterval(function(){
//   var timeCount = parseInt($(".timer").text());
//   $(".timer").text(timeCount) -1},1000);

// });
























// console.log("I'm added!");

// $(document).ready(function(){


// var objectsToHide = ["butterfly_1", "window", "mouse", "fork", "key", "jewelry_box"];


// $(document).ready(function () {
//     $("img").click(function () {
//         if ($.inArray(this.className, objectsToHide) != -1) {
//             $(this).slideUp(500);
//             // this.style.visibility = "hidden";
//             $("li." + this.className).css("text-decoration", "line-through");
//             // var currentScore = new Number($('.score').text()) + 1;
//             // $('.score').text(currentScore);
//         }

//     });




// });

// $(document).ready(function(){

//     window.setInterval(function(){

//         var timeCount = parseInt($('.timer').text());

//         $('.timer').text(timeCount) -1;

//     },1000);

//     if (timeCount <=0){
//         // var myScore = $('.score').text();
//         $(window.location).attr("href","end_of_game.html?score=" + myScore);//create a new html page gameOver.html
//     }




// });
