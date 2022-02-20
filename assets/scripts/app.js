const addMovieModal = document.getElementById('add-modal');
const mainAddMovieButton = document.querySelector('header button');
const backdropElement = document.getElementById('backdrop');
const cancelAddMovieButton  = addMovieModal.querySelector('.btn--passive');
const acceptAddedMovieButton = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');

const allMovies = [];

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdropElement();
}

const toggleBackdropElement = () => {
    backdropElement.classList.toggle('visible');
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInputs();
}

const clearMovieInputs = () => {
    userInputs[0].value = '';
    userInputs[1].value = '';
    userInputs[2].value = '';
}

const acceptMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const urlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' || 
        urlValue.trim === '' || 
        ratingValue === '' ||
        ratingValue < 1 ||
        ratingValue > 5
        ) {
            alert ('Please insert proper values.');
            return;
        }
    
    const newMovie = {
        title: titleValue,
        url: urlValue,
        rating: ratingValue
    };

    allMovies.push(newMovie);
    console.log(allMovies);
    toggleMovieModal();
    clearMovieInputs();
}

mainAddMovieButton.addEventListener('click', toggleMovieModal);
backdropElement.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
acceptAddedMovieButton.addEventListener('click', acceptMovieHandler);