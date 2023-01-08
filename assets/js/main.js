/*======================== show menu ==================*/
const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'), 
    navClose = document.getElementById('nav-close');

/*=================== Menu Show ====================*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    });
}

/*=================== Menu Hidden ====================*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

/*================= Remove Menu Mobile =================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show-menu')
    // When we click on each nav__link, we remove the show-menu
}
navLink.forEach(n => n.addEventListener('click', linkAction));