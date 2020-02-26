/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

//Bron: https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click",

  function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    }

    else {
      panel.style.maxHeight = panel.scrollHeight + "px";

      var huisVeranderd = document.querySelector('#huismodel');

      huisVeranderd.className = "";  // Maakt het eerst leeg, en voegt dan de volgende klik hierdoner toe
      huisVeranderd.classList.add(this.id); // Hierin voeg je de class toe aan de hand van welke panel je klikt.
    }
  });
}
