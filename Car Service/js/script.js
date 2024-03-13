document.getElementById("year").innerHTML = new Date().getFullYear();

const homeBgImg = document.querySelector(".home-content");

const imgArr = [
    "images/home1.jpg",
    "images/home2.jpg",
    "images/home3.jpg",
    "images/home4.jpg"
];
let indexA = 0;

document.addEventListener("DOMContentLoaded", function () {
    let randIndexA = Math.floor(Math.random() * imgArr.length);
    homeBgImg.style.background = `url(${imgArr[randIndexA]}) no-repeat center center / cover`;
});


const homeRightArrow = document.getElementById("right-arrow");
homeRightArrow.addEventListener("click", () => {
    if (indexA === imgArr.length - 1) {
        indexA = 0;
    } else {
        indexA++;
    }
    homeBgImg.style.background = `url(${imgArr[indexA]}) no-repeat center center / cover`;
});

const homeLeftArrow = document.getElementById("left-arrow");
homeLeftArrow.addEventListener("click", () => {
    if (indexA === 0) {
        indexA = imgArr.length - 1;
    } else {
        indexA--;
    }
    homeBgImg.style.background = `url(${imgArr[indexA]}) no-repeat center center / cover`;
});

const aboutPhidden = document.querySelector(".about-p-hidden");
const aboutPshow = document.querySelector(".about-p-show");

const aboutImg = document.getElementById("about-img");
let checkAbout = false;

const aboutLeftArrow = document.getElementById("about-left");
aboutLeftArrow.addEventListener("click", () => {
    if (checkAbout) {
        aboutPhidden.style.display = "none";
        aboutPshow.style.display = "flex";
        checkAbout = false;
        aboutImg.style.background = "url('images/about.jpg') no-repeat center center / cover";
    }
});

const aboutRightArrow = document.getElementById("about-right");
aboutRightArrow.addEventListener("click", () => {
    if (!checkAbout) {
        aboutPhidden.style.display = "flex";
        aboutPshow.style.display = "none";
        checkAbout = true;
        aboutImg.style.background = "url('images/about1.jpg') no-repeat center center / cover";
    }
});

// scroll section

let sections = document. querySelectorAll('section');
let navLinks = document. querySelectorAll ('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 250;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}


// Seleziona il pulsante
const aboutNavButton = document.getElementById("about-menu");

// Aggiungi un gestore di eventi al clic del pulsante
aboutNavButton.addEventListener("click", function () {

    event.preventDefault();
    // Seleziona l'elemento a cui desideri scorrere
    const targetElement = document.getElementById("about");
    
    // Calcola la posizione desiderata in termini di pixel (ad esempio, 100px sopra la sezione)
    const desiredPosition = targetElement.offsetTop - 250;
    
    // Esegui lo scroll verso la posizione desiderata
    window.scrollTo({
        top: desiredPosition,
        behavior: "smooth" // Per uno scorrimento fluido
    });
});

