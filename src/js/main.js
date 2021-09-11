let mobile_menu_button = document.querySelector('#menu-checkbox');

// отслеживание событий свайпа для меню
var xDown = null;                                                        
var yDown = null;

const getTouches = (evt) => {
    return evt.touches;
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

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 && !evt.target.classList.contains('no-use-swipe')) {
            /* свайп влево */ 
            if (mobile_menu_button.checked) {
                // имитируем событие клика на чекбокс для открытия/закрытия мобильного меню
                mobile_menu_button.click(); 
            }
        } else if (xDiff < 0 && !evt.target.classList.contains('no-use-swipe')) {
            /* свайп вправо */
            if (!mobile_menu_button.checked) {
                // имитируем событие клика на чекбокс для открытия/закрытия мобильного меню
                mobile_menu_button.click(); 
            }
        }                       
    } 

    xDown = null;
    yDown = null;                                             
};

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

const scrollToTop = (evt) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const scroll_top_button = document.getElementById('button');
scroll_top_button.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    let position = scroll_top_button.offsetTop - 300;
  
    if (scrolled >= position && !scroll_top_button.classList.contains('show')) {
        scroll_top_button.classList.add('show');
    }
    else if (scrolled < position && scroll_top_button.classList.contains('show')) {
        scroll_top_button.classList.remove('show');
    }
});

/** TODO @project-video */
/* document.addEventListener('DOMContentLoaded', () => {
    let video_buttons = document.querySelectorAll('.video__button');

    if (video_buttons.length) {
        video_buttons.forEach( button => {
            button.addEventListener('click', (e) => {
                let poster = e.target.parentNode;
                let video  = e.target.parentNode.parentNode;
                poster.style.display = none;


            });
        });
    }
}); */
