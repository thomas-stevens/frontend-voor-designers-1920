// const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
  const movies = request.response;
  console.log(movies);
  showMovies(movies);
}

function showMovies(jsonObj) {
  const movies = jsonObj;

  for (let i = 0; i < movies.length; i++) {
    let myArticle = document.createElement('article');
    let myH2 = document.createElement('h2');
    let myH3 = document.createElement('h3');
    let filmNummer = document.createElement('span');
    let myPara1 = document.createElement('div');
    let myPara2 = document.createElement('p');
    let myPara3 = document.createElement('p');
    let myImg = document.createElement('img');
    let trailer = document.createElement('button');
    let reviews = document.createElement('ul');

    myH2.textContent = movies[i].title;
    myH3.textContent = 'Reviews';
    filmNummer.textContent = movies[i].id;
    myPara1.textContent = 'Plot: ' + movies[i].simple_plot;
    myPara2.textContent = 'Genres: ' + movies[i].genres;
    myPara3.textContent = 'Release Date: ' + movies[i].release_date;
    myImg.src = movies[i].cover;
    trailer.textContent = 'Trailer';

    for (let t = 0; t < movies[i].reviews.length; t++) {
      let review = document.createElement('li');
		let reviewScore = movies[i].reviews[t].score;
      review.textContent = reviewScore;
		reviews.appendChild(review);
    }

    for (t = 0; t < movies[i].genres.length; t++) {
    let genre = movies[i].genres[t];
    genre = genre.toLowerCase(); // om de hoofdletter weg te halen
    myArticle.classList.add(genre);
}

    myPara1.classList.add("plot");
    trailer.classList.add("knop");
    reviews.classList.add("reviews");
    myH3.classList.add("review-title");

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(filmNummer);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myImg);
    myArticle.appendChild(trailer);
    myArticle.appendChild(reviews);

    section.appendChild(myArticle);

  }
}

var filterblok = document.querySelector(".filters");

filterblok.addEventListener('change', function (event) {

document.body.setAttribute("data-filter", event.target.id);

});
