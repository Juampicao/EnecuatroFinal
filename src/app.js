const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function iniciarMap() {
  var coord = { lat: -34.6022165, lng: -58.5106792 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}

// ------------------------- MODAL ---------------------------------------------//
let modalMercadoLibre = document.getElementById("modalMercadoLibre");
let modalPrudential = document.getElementById("modalPrudential");
let modalVitality = document.getElementById("modalVitality");

let buttonMercadoLibre = document.getElementById("buttonMercadoLibre");
let buttonPrudential = document.getElementById("buttonPrudential");
let buttonVitality = document.getElementById("buttonVitality");

// Botones
buttonMercadoLibre.onclick = function () {
  modalMercadoLibre.style.display = "block";
};
buttonPrudential.onclick = function () {
  modalPrudential.style.display = "block";
};

buttonVitality.onclick = function () {
  modalVitality.style.display = "block";
};

//Close
let closeMercadoLibre = document.getElementById("closeMercadoLibre");
let closePrudential = document.getElementById("closePrudential");
let closeVitality = document.getElementById("closeVitality");

// Click
closeMercadoLibre.onclick = function () {
  modalMercadoLibre.style.display = "none";
};
closePrudential.onclick = function () {
  modalPrudential.style.display = "none";
};
closeVitality.onclick = function () {
  modalVitality.style.display = "none";
};

// ------------------------------ Carrousel-----------------------------------//
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
