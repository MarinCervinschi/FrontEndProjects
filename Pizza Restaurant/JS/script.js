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

window.onscroll = () => {

    // sticky header
    let header = document.querySelector(".menu__bar");
    header.classList.toggle("sticky", window.scrollY > 100);

}


  
// -------- //

  
