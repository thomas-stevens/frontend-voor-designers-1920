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

    /* een link is een <a> en geen <button > */
    let trailer = document.createElement('a');

    let reviews = document.createElement('ul');

    myH2.textContent = movies[i].title;
    myH3.textContent = 'Reviews';
    filmNummer.textContent = movies[i].id;
    myPara1.textContent = 'Plot: ' + movies[i].simple_plot;
    myPara2.textContent = 'Genres: ' + movies[i].genres;
    myPara3.textContent = 'Release Date: ' + movies[i].release_date;
    myImg.src = movies[i].cover;

    trailer.textContent = 'Trailer';
    /* de link een href geven */
    trailer.href = movies[i].trailer;

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

// Filters

var filterblok = document.querySelector(".filters");

filterblok.addEventListener('change', function(event) {

  document.body.setAttribute("data-filter", event.target.id);

});


// Keyboard functies

document.body.addEventListener('keydown', function(event) {
  if (event.keyCode == 189) {
    document.documentElement.setAttribute('data-theme', 'light');
    var licht = document.querySelector("#checkbox");
    licht.checked = false;
  } else if (event.keyCode == 187) {
    document.documentElement.setAttribute('data-theme', 'dark');
    var donker = document.querySelector("#checkbox");
    donker.checked = true;
  } else if (event.keyCode == 49) {
    document.body.setAttribute("data-filter", "all");
    var een = document.querySelector("#all");
    een.checked = true;
  } else if (event.keyCode == 50) {
    document.body.setAttribute("data-filter", "action");
    var twee = document.querySelector("#action");
    twee.checked = true;
  } else if (event.keyCode == 51) {
    document.body.setAttribute("data-filter", "adventure");
    var drie = document.querySelector("#adventure");
    drie.checked = true;
  } else if (event.keyCode == 52) {
    document.body.setAttribute("data-filter", "crime");
    var vier = document.querySelector("#crime");
    vier.checked = true;
  } else if (event.keyCode == 53) {
    document.body.setAttribute("data-filter", "drama");
    var vijf = document.querySelector("#drama");
    vijf.checked = true;
  } else if (event.keyCode == 54) {
    document.body.setAttribute("data-filter", "horror");
    var zes = document.querySelector("#horror");
    zes.checked = true;
  } else if (event.keyCode == 55) {
    document.body.setAttribute("data-filter", "thriller");
    var zeven = document.querySelector("#thriller");
    zeven.checked = true;
  }
});

var youtube = document.querySelector('.knop');

function link() {
  youtube.location.href = "https://www.youtube.com/";
}

youtube.addEventListener('click', link);
