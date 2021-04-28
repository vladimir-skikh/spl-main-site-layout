let mobile_menu_button = document.querySelector('#menu-checkbox');

// отслеживание событий свайпа для меню
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

    const xUp = evt.touches[0].clientX;                                    
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            if (mobile_menu_button.checked) {
                mobile_menu_button.click();
            }
        } else {
            /* right swipe */
            if (!mobile_menu_button.checked) {
                mobile_menu_button.click();
            }
        }                       
    } 

    xDown = null;
    yDown = null;                                             
};

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);