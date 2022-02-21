const addMovieModal = document.getElementById('add-modal');
const mainAddMovieButton = document.querySelector('header button');
const backdropElement = document.getElementById('backdrop');
const cancelAddMovieButton  = addMovieModal.querySelector('.btn--passive');
const acceptAddedMovieButton = addMovieModal.querySelector('.btn--success');
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const deleteMoviesCancelButton = deleteMovieModal.querySelector('.btn--passive');
const deleteMoviesYesButton = deleteMovieModal.querySelector('.btn--danger');

const allMovies = [];

const updateMainPage = () => {
    if (allMovies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of allMovies) {
        if (movie.id === movieId) {
            break;
        };
        movieIndex ++;
    };
    allMovies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    cancelMovieDeletion();
    updateMainPage();
};

const cancelMovieDeletion = () => {
    toggleBackdropElement();
    deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = (movieId) => {
    deleteMovieModal.classList.add('visible');
    toggleBackdropElement();
    deleteMoviesYesButton.addEventListener('click', deleteMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackdropElement();
};

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible');
}

const toggleBackdropElement = () => {
    backdrop.classList.toggle('visible');
};

const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInputs();
    toggleBackdropElement();
};

const clearMovieInputs = () => {
    userInputs[0].value = '';
    userInputs[1].value = '';
    userInputs[2].value = '';
};

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
        id: Math.random().toString(),
        title: titleValue,
        url: urlValue,
        rating: ratingValue
    };

    allMovies.push(newMovie);
    console.log(allMovies);
    closeMovieModal();
    toggleBackdropElement();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.url, newMovie.rating);
    updateMainPage();
};

const backdropClickHandler = () => {
    closeMovieModal();
    cancelMovieDeletion();
};

mainAddMovieButton.addEventListener('click', showMovieModal);
backdropElement.addEventListener('click', toggleBackdropElement);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
acceptAddedMovieButton.addEventListener('click', acceptMovieHandler);
deleteMoviesCancelButton.addEventListener('click', cancelMovieDeletion);