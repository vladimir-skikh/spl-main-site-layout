// событие при загрузке документа 
document.addEventListener('DOMContentLoaded', () => {
    let video_play_button = document.querySelector('.video__button');

    video_play_button.addEventListener('click', playVideo, false);
    video_play_button.addEventListener('onkeyup', playVideo, false);
});

// функция проигрывания видео 
const playVideo = (evt) => {
    let video = document.querySelector('.video__source');
    let video_play_cover = document.querySelector('.video__cover');

    evt.currentTarget.classList.add('video__button_hidden')
    video_play_cover.classList.add('video__cover_hidden');

    video.classList.add('video__source_visible');
    video.play();
}