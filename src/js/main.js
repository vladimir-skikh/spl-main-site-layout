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
            /* свайп влево */ 
            if (mobile_menu_button.checked) {
                // имитируем событие клика на чекбокс для открытия/закрытия мобильного меню
                mobile_menu_button.click(); 
            }
        } else {
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

// события после загрузки контента
document.addEventListener('DOMContentLoaded', (e) => {
    
    // Изменение активной кнопки со стадией проекта
    const project_states_buttons = document.querySelectorAll('.projects__states-item__text');
    project_states_buttons.forEach( button => {
        button.addEventListener('click', (e) => {
            if (!e.currentTarget.classList.contains('projects__states-item__text_active')) {
                project_states_buttons.forEach(button => {
                    button.classList.remove('projects__states-item__text_active');
                });
                e.currentTarget.classList.add('projects__states-item__text_active');
            }
        });
    });
});

const projects_select = new BVSelect({
    selector: "#projects_select",
    searchbox: true,
    placeholder: "Выберете проект",
    search_placeholder: "Проект..."
});
