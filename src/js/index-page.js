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

    const glide_projects = new Glide('.glide_projects', {
        startAt: 0,
        perView: 1,
        keyboard: true,
        gap: 30,
        focusAt: 'center',
        breakpoints: {
            860: {
                perView: 3,
            },
            660: {
                perView: 2,
            },
            450: {
                perView: 1,
            }
        }
    });

    const glide_infographic = new Glide('.glide_infographic', {
        startAt: 0,
        perView: 1,
        keyboard: true,
        gap: 30,
        focusAt: 'center',
        breakpoints: {
            860: {
                perView: 3,
            },
            660: {
                perView: 1,
            },
            550: {
                perView: 1,
            }
        }
    });

    let sliders = {
        glide_projects_object: {
            slider: glide_projects,
            breakpoint: null,
            active: false
        },
        glide_infographic_object: {
            slider: glide_infographic,
            breakpoint: 860,
            active: false
        }
    };

    // Инициализация слайдеров
    const initSliders = (sliders) => {
        for (const key in sliders) {
            let slider_object = sliders[key];
            console.log(slider_object.active);

            if ((!slider_object.active && slider_object.breakpoint === null) || 
                (!slider_object.active && slider_object.breakpoint > 0 && window.innerWidth <= slider_object.breakpoint)
            ) {
                slider_object.slider.mount();
                slider_object.active = true;
            }
        }
    }
    initSliders(sliders);

    const destroySliders = (sliders) => {
        for (const key in sliders) {
            let slider_object = sliders[key];
            if (
                slider_object.active 
                && slider_object.breakpoint > 0 
                && window.innerWidth > slider_object.breakpoint
            ) {
                slider_object.slider.destroy();
                slider_object.active = false;
            }
        }
    }

    window.addEventListener('resize', () => {
        destroySliders(sliders);
        initSliders(sliders);
    });

    // Инициализация селекта в форме заявки
    const projects_select = new BVSelect({
        selector: "#projects_select",
        searchbox: true,
        placeholder: "Выберете проект",
        search_placeholder: "Проект..."
    });
});









