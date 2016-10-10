console.log("I'm added!");

// $(document).ready(function(){


var objectsToHide = ["butterfly_1", "window", "mouse", "fork"];


$(document).ready(function () {
    $("img").click(function () {
        if ($.inArray(this.className, objectsToHide) != -1) {
            $(this).slideUp(1000);
            // this.style.visibility = "hidden";

            $("li." + this.className).css("text-decoration", "line-through");
        }

    });
});

// });
