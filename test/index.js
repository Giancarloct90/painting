const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('burger');
const navlinkses = document.querySelectorAll('.navLinks li');

burger.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active');
    // navBar.style.animation = `navAnimation 0.5s ease forwards 0.3s`;
    navlinkses.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation = `navAnimation 0.5s ease forwards ${index/7 + 0.5}s`
        }
    });
    burger.classList.toggle('toggle');
});