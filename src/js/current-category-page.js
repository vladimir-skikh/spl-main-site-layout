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