const navlinks = document.getElementById('navlinks');
const burger = document.getElementById('burger');
const navLinksActives = document.querySelectorAll('.navlinks li');
const li = document.getElementsByTagName('li');

burger.addEventListener('click', ()=>{
    navlinks.style.display = ''
    //toggle class
    navlinks.classList.toggle('navLinksActive');
    
    //Animation li 
    navLinksActives.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation= `navLinksAnimations 0.5s ease forwards ${index/7+0.3}s`
        }
    });

    //Convert tha humburger to X
    burger.classList.toggle('toggle');
});

navLinksActives.forEach(item =>{
    item.addEventListener('click', ()=>{
    navlinks.style.display = ''

           //toggle class
    navlinks.classList.toggle('navLinksActive');
    
    //Animation li 
    navLinksActives.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }else{
            link.style.animation= `navLinksAnimations 0.5s ease forwards ${index/7+0.3}s`
        }
    });

    //Convert tha humburger to X
    burger.classList.toggle('toggle');
    });
});

window.addEventListener('scroll', ()=>{
    navlinks.style.display = 'none'
})

