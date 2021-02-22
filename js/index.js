// We execute the same script as before
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//   });

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

