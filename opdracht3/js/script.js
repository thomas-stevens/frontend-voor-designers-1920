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

// function populateHeader(jsonObj) {
//   const myH1 = document.createElement('h1');
//   myH1.textContent = jsonObj['squadName'];
//   header.appendChild(myH1);
//
//   const myPara = document.createElement('p');
//   myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//   header.appendChild(myPara);
// }

function showMovies(jsonObj) {
  const movies = jsonObj;

  for (let i = 0; i < movies.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const filmNummer = document.createElement('span');
    const myPara1 = document.createElement('div');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myImg = document.createElement('img');
    const trailer = document.createElement('button');
    const review = document.createElement('div');

    myH2.textContent = movies[i].title;
    filmNummer.textContent = movies[i].id;
    myPara1.textContent = 'Plot: ' + movies[i].simple_plot;
    myPara2.textContent = 'Genres: ' + movies[i].genres;
    myPara3.textContent = 'Release Date: ' + movies[i].release_date;
    myImg.src = movies[i].cover;
    trailer.textContent = 'Trailer';
    review.textContent = 'Review: ' + movies[i].reviews;

    for (let t = 1; t < movies[i].reviews.length; t++) {
      let reviewScore = movies[i].reviews[t].score;
      // en dan nog code om de review aan je film teo te voegen
    }

    myPara1.classList.add("plot");
    trailer.classList.add("knop");
    review.classList.add("review")

    myArticle.appendChild(myH2);
    myArticle.appendChild(filmNummer);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myImg);
    myArticle.appendChild(trailer);
    myArticle.appendChild(review);

    section.appendChild(myArticle);

  }
}
