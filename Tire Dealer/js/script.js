document.getElementById("year").innerHTML = new Date().getFullYear();


//hidden animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }   
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach( (el) => observer.observe(el));
// toggle icon navbar

let menuIcon = document. querySelector ('#menu-icon');
let navbar = document.querySelector ('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 

// scroll section

let sections = document. querySelectorAll('section');
let navLinks = document. querySelectorAll ('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar Links
            navLinks.forEach(links => {
                links.classList.remove ('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        }
    });

    // sticky header
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // remove toggle icon and navbar when click navbar Links (scroll) 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// about --------------------------------------------------------------------------------------------

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
        aboutImg.style.background = "url('images/about.jpeg') no-repeat center center / cover";
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

//contatti

function displayflex() {
    const call = document.getElementById("call");
    const number = document.getElementById("number");
    
    const callStyle = window.getComputedStyle(call);
    
    if (callStyle.display === "flex") {
        call.style.display = "none";
        number.style.display = "flex";
    } else {
        call.style.display = "flex";
        number.style.display = "none";
    }
}
