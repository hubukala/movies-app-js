const addMovieModal = document.getElementById('add-modal');
const mainAddMovieButton = document.querySelector('header button');

mainAddMovieButton.addEventListener('click', () => {
    addMovieModal.classList.toggle('visible');
});