window.addEventListener('keydown', (e) => {

  if (e.key == 'ArrowRight') {

    event.preventDefault();

    document.getElementById("volgende").click();
  }

  else if (e.key == 'ArrowLeft'){
    event.preventDefault();

    document.getElementById("vorige").click();
  }
});
