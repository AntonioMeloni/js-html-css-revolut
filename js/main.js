$(document).ready(function() {

    $('.menu-item').click(function(){

        if($(this).children('.dropdown-menu').is(':visible')) {
            $(this).children('.dropdown-menu').hide();
        } else {
            $('.menu-item').children('.dropdown-menu').hide();
            $(this).children('.dropdown-menu').toggle();
        }

    });
});
