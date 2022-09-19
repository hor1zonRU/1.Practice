const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error')
        i--;
    }
}

console.log(personalMovieDB);

switch (true) {
    case (personalMovieDB.count < 10):
        console.log('Просмотрено довольно мало фильмов');
        break;
    case (10 <= personalMovieDB.count < 30):
        console.log('Вы класиический зритель');
        break;
    case (personalMovieDB.count >= 30):
        console.log('Вы кинаман');
        break;
    default:
        console.log('Произошла ошибка');
        break;
}
