const hamburger= document.querySelector(".hamburger");
const navbar_menu= document.querySelector(".navbar_menu");

hamburger.addEventListener('click' , function(){
    hamburger.classList.toggle("active");
    navbar_menu.classList.toggle("active");
})