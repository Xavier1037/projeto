$(function(){

    $('[goto=contato]').click(function(){
        $('nav a').css('color','black');
        $(this).css('color','#EB2D2D');
        $('html,body').animate({'scrollTop':$('#contato').offset().top});
        return false;
    })

});
