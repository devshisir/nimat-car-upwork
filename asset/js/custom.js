$(document).ready(function() {
    console.log('I am ready');
    $('.inject').svgInject();
    $('.toggleButton').on('click',function(){
        $('.sidebar').toggleClass('toggle');
        $('.app_wrapper').toggleClass('toggle');
    })
});