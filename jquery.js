console.log("JS attached!");

$(document).ready(function(){

var objectsToHide = ["butterfly_1","window","spider","key","feather","hat","bycicle_2","coffee_cup","mouse","fork"];

$('img').click(function(){
if($.inArray(this.className, objectsToHide) != -1){
  $(this).slideUp(500);
  $('li.' + this.className).css('text-decoration',"line-through");

}

});

    window.setInterval(function(){

        var timeCount = parseInt($(".timer").text());

        $(".timer").text(timeCount -1);
            if(timeCount<=0){

      $(window.location).attr("href","game_over.html");
    }

    },1000);

        $('input').click(function(){
      $(window.location).attr("href","index.html");
    });
    // <input class="startAgain" type="submit" value="Start Again">
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
