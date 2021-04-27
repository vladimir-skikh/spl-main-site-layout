let mobile_menu_button = document.querySelector('#menu-checkbox');
let body = document.querySelector('body');

mobile_menu_button.addEventListener('change', (e) => {
    body.classList.toggle('fixed');
});


// отслеживание событий свайпа для меню
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

const getTouches = (evt) => {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

const handleTouchMove = (evt) => {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            mobile_menu_button.cheсked = false
        } else {
            /* right swipe */
            mobile_menu_button.cheсked = true
        }                       
    } 

    /* reset values */
    xDown = null;
    yDown = null;                                             
};