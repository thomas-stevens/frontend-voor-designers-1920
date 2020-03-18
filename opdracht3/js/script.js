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
    // const myVid = document.createElement('mp4');
    const myList = document.createElement('ul');

    myH2.textContent = movies[i].title;
    myPara1.textContent = 'Plot: ' + movies[i].simple_plot;
    myPara2.textContent = 'Genres: ' + movies[i].genres;
    myPara3.textContent = 'Release Date: ' + movies[i].release_date;
    myImg.src = movies[i].cover;
    filmNummer.textContent = movies[i].id;
    // myVid.src = movies[i].trailer;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(filmNummer);
    myArticle.appendChild(myImg);
    // myArticle.appendChild(myVid);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
