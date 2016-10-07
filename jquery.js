console.log("I'm added!");

$(document).ready(function(){

var fork = $('.fork');

fork.click(function(){

fork.each(function(){
$(this).hide();
});
});

});
