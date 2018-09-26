$(document).ready(function(){
    var el = document.getElementById('text')

    $('[data-trigger="dropdown"]').on('mouseenter', function(){
        var submenu = $(this).parent().find('.submenu');
        submenu.addClass('active');
    });
   /* alert("Hi MAN")
    $('#text').html("This is my text");
    $('#go-button').on('click' ,function(){
        alert("Fantastic job man")
    })*/
})