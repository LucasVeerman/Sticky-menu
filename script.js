var scrollWaarde;
var laatstePositie = 0;
var navBalk = $('nav');
var menuHoogte = navBalk.outerHeight();

function beweging()
{
    scrollWaarde = $(this).scrollTop();
    if(scrollWaarde>laatstePositie)
    {
        //we scrollen naar beneden
        laatstePositie = scrollWaarde;
        navBalk.css('top', -menuHoogte + 'px');
    } else{
        //het menu halen
        laatstePositie = scrollWaarde;
        navBalk.css('top', '0');
    }
    
    
}

$(window).on('scroll', beweging);