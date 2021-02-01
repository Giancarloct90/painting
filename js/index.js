const navlinks = document.getElementById('navlinks');
const burger = document.getElementById('burger');
const navLinksActive = document.querySelectorAll('.navlinks li');

burger.addEventListener('click', ()=>{
    //toggle class
    navlinks.classList.toggle('navLinksActive');
    
    //Animation li 
    navLinksActive.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation= `navLinksAnimations 0.5s ease forwards ${index/7+0.3}s`
        }
    });

    //Convert tha humburger to X
    burger.classList.toggle('toggle');
});

