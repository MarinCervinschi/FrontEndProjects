document.getElementById("year").innerHTML = new Date().getFullYear();

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

// menu 
const toggleMenu = () => {
  const navigation = document.querySelector('.navigation');


  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute('src');

  const isBurger = src === 'CSS/media/assets/burger-menu.svg';

  const iconName = isBurger ? 'CSS/media/assets/close.svg' : 'CSS/media/assets/burger-menu.svg';

  burgerMenu.setAttribute(
      'src',
      iconName
  );

  if (!isBurger) {
      navigation.classList.add("navigation--mobile--fadeout");
      setTimeout(() => {
          navigation.classList.toggle(
              'navigation--mobile'
          );
      }, 300)
  } else {
      navigation.classList.remove("navigation--mobile--fadeout");
      navigation.classList.toggle(
          'navigation--mobile'
      );
  }
};

// -------- //

  //Light Box Image Gallery
  const links = document.querySelectorAll('.gallery img');
  const lightboxContainer = document.querySelector('.lightbox-container');
  const lightboxImage = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector(".lightbox-btn--cls");
  const buttons = document.querySelectorAll('.lightbox-btn');
  const nextBtn = document.querySelector('.lightbox-btn--next');
  const prevBtn = document.querySelector('.lightbox-btn--prev');

  let currentIndex = 0;
  const imageCount = links.length;

  const toggleClass = (element, className) => {
    if(element.classList.contains(className)) {
      element.classList.remove(className);
      return;
    }
    element.classList.add(className);
  };

  const addClass = (element, className) => {
    if(!element.classList.contains(className)) {
      element.classList.add(className);   
    }
  }; 

  const removeClass = (element, className) => {
    if(element.classList.contains(className)) {
      element.classList.remove(className);   
    }
  }; 

  const closeLightBox = () => {
    lightboxContainer.classList.remove('active');
    lightboxImage.src = '';
  };

  const setCurrentImage = (link, index) => {
      clearImageActive();
     currentIndex = index;
     lightboxImage.src = link.src;
     setImageActive();  
  };

  const clearImageActive = () => {
     if( lightboxImage.classList.contains("active") ) {
       lightboxImage.classList.remove("active");
     }
  };

  const setImageActive = () => {
     if( !lightboxImage.classList.contains("active") ) {
       lightboxImage.classList.add("active");
     }
  };

  const showLightBox = () => {
    lightboxContainer.classList.add('active');
    clearImageActive();
  };

  closeBtn.addEventListener('click', e => {
    closeLightBox();
    clearImageActive();
  });

  lightboxImage.addEventListener('load', e => {
  });

  const preloadImage = (src) => {
    const image = new Image();
    image.src = src;
  }

  links.forEach((link, index, datalist) => { 
    preloadImage(link.src);
    link.addEventListener ( 'click', e => {
      e.preventDefault();
      e.stopPropagation();
      showLightBox();
      setCurrentImage(link, index);  
    });
  });

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      e.stopPropagation();
    });
  });

  nextBtn.addEventListener('click', e => {
    if(currentIndex < imageCount - 1) {
      currentIndex++;
    }
    else if(currentIndex === imageCount - 1) {
      currentIndex = 0;
    }
    const newLink = links[currentIndex];
    setCurrentImage(newLink, currentIndex);
  });

  prevBtn.addEventListener ('click', e => {
    if(currentIndex > 0) {
      currentIndex--;
    } else if (currentIndex === 0){ 
      currentIndex = imageCount - 1;
    }
    const newLink = links[currentIndex];
    setCurrentImage(newLink, currentIndex);
  })
  // -------- //
  // Function to use the keyboard
window.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowRight":
            nextBtn.click();
            break;
        case "ArrowLeft":
            prevBtn.click();
            break;
        default:
            break;
    }
})
