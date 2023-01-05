'use strict'
//Navbar scoll color change
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height
document.addEventListener('scroll',()=>{
  //  console.log(window.scrollY);
    console.log(`navbarHeight${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        console.log(`내려갈때`);
        navbar.classList.add('navbar--dark');
    }else{
        console.log(`올라갈때`);
        navbar.classList.remove('navbar--dark');
    }

});