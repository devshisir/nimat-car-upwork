$(document).ready(function() {
    $('.inject').svgInject();
    $('.toggleButton').on('click',function(){
        $('.sidebar').toggleClass('toggle');
        $('.app_wrapper').toggleClass('toggle');
    })
});