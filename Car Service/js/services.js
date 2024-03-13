document.getElementById("year").innerHTML = new Date().getFullYear();

let indexActive = 0;

const servicesArr = [
  document.getElementById("service1"),
  document.getElementById("service2"),
  document.getElementById("service3"),
  document.getElementById("service4"),
  document.getElementById("service5"),
  document.getElementById("service6")
];

const menuActiveArr = document.querySelectorAll(".menu-services ul li");
const topTitle = document.querySelector(".top-title h1");
const centerImg = document.querySelectorAll(".content-services figure");

const contentElements = [
  document.querySelectorAll("#content1"),
  document.querySelectorAll("#content2"),
  document.querySelectorAll("#content3"),
  document.querySelectorAll("#content4"),
  document.querySelectorAll("#content5"),
  document.querySelectorAll("#content6")
];

const servicesImgs =[
    "images/services/service-6.jpeg",
    "images/services/service-2.jpeg",
    "images/services/service-3.jpeg",
    "images/services/service-1.jpeg",
    "images/services/service-5.jpeg",
    "images/services/service-4.jpeg",
];

function showService(index) {
  if (indexActive !== index) {
    menuActiveArr[indexActive].classList.remove("menu-active");
    servicesArr[indexActive].style.display = 'none';
  }
  indexActive = index;
  menuActiveArr[indexActive].classList.add("menu-active");
  servicesArr[indexActive].style.display = 'flex';

  const serviceTitles = ["Maintenance", "Mechanics", "Oil Change", "Tire Change", "Lights & Accessories", "Service Bookings"];
  topTitle.textContent = serviceTitles[indexActive];

  centerImg[indexActive].style.background = `url(${servicesImgs[indexActive]}) no-repeat center center / cover`;
}

contentElements.forEach((content, index) => {
  content.forEach(element => {
    element.addEventListener("click", () => {
      showService(index);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get("content");
  
    // Verifica se il parametro "content" è stato specificato nell'URL
    if (contentId !== null) {
      const index = parseInt(contentId) - 1; // Converte il valore in un indice (1-based)
  
      // Assicurati che l'indice sia valido per evitare errori
      if (index >= 0 && index < servicesArr.length) {
        showService(index); // Richiama la funzione per mostrare il servizio corretto
      }
    }
  });
  
