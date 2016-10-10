console.log("I'm added!");

// $(document).ready(function(){


var objectsToHide = ["butterfly_1", "window", "mouse", "fork", "key", "jewelry_box"];


$(document).ready(function () {
    $("img").click(function () {
        if ($.inArray(this.className, objectsToHide) != -1) {
            $(this).slideUp(500);
            // this.style.visibility = "hidden";

            $("li." + this.className).css("text-decoration", "line-through");
            var currentScore = new Number($('.score').text()) + 1;
            $('.score').text(currentScore);
        }

    });




});

$(document).ready(function(){

    window.setInterval(function(){

        var timeCount = parseInt($('.timer').text());

        $('.timer').text(timeCount) -1);

    },1000);

    if (timeCount <=0){
        var myScore = $('.score').text();
        $(window.location).attr("href","gameover.html?score=" + myScore);//create a new html page gameOver.html
    }



});
