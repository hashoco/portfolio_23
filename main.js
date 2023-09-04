'use strict'
//Navbar scoll color change
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar
    .getBoundingClientRect()
    .height
    document
    .addEventListener('scroll', () => {
        //  console.log(window.scrollY);
        console.log(`navbarHeight${navbarHeight}`);
        if (window.scrollY > navbarHeight) {
            navbar
                .classList
                .add('navbar--dark');
        } else {
            navbar
                .classList
                .remove('navbar--dark');
        }

    });

//navbar scrolling handle
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu
        .classList
        .remove('open');
    scrollIntoViews(link);
});

const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', (event) => {
    scrollIntoViews('#contact');
});

//home slowly fade
const home = document.querySelector('.scroll__container');
const homeHeight = home
    .getBoundingClientRect()
    .height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;

});
//show arrow-up
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {

    if (window.scrollY > homeHeight / 2) {
        arrowUp
            .classList
            .add('visible');

    } else {
        arrowUp
            .classList
            .remove('visible');
    }
});

arrowUp.addEventListener('click', () => {
    scrollIntoViews('#home')
})

//toggle click event
const toggleClick = document.querySelector('.navbar__toggle-btn')
toggleClick.addEventListener('click', () => {
    navbarMenu
        .classList
        .toggle('open');

})

function scrollIntoViews(select) {
    const scrollTo = document.querySelector(select);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}