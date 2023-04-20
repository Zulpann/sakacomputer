const bigBtn = document.getElementsByClassName("big-button")[0];
bigBtn.addEventListener('click', function(){
    alert("Di Click")
})

// const liNavigationProduct = document.querySelector('.navigation-product ul li');
// liNavigationProduct.style.color = "red";

const wraperCardGaming = document.querySelector('.wrap-gaming');
wraperCardGaming.style.display = "none"
const wraperCardProvesional = document.querySelector('.wrap-profesional');
wraperCardProvesional.style.display = "none"
const wraperCardMultimedia = document.querySelector('.wrap-multimedia');
wraperCardMultimedia.style.display = "none"

wraperCardGaming.style.display = "flex"


const gaming = document.getElementById('gaming')
gaming.addEventListener('click', function(){
    wraperCardGaming.style.display = "flex"
    if(true){
        wraperCardProvesional.style.display = "none"
        wraperCardMultimedia.style.display = "none"
    } 
});
const profesional = document.getElementById('personal')
profesional.addEventListener('click', function(){
    wraperCardProvesional.style.display = "flex"
    if(true){
        wraperCardMultimedia.style.display = "none"
        wraperCardGaming.style.display = "none"
    }
});
const multimedia = document.getElementById('multimedia')
multimedia.addEventListener('click', function(){
    wraperCardMultimedia.style.display = "flex"
    if(true){
        wraperCardGaming.style.display = "none"
        wraperCardProvesional.style.display = "none"
    }
});


const navigationBar = document.getElementById('navbar')

const ctogle = document.getElementById('ctogle');
const togle = document.querySelector('.togle');


console.log(navigationBar)
togle.addEventListener('click', function(){
    navigationBar.setAttribute('class', 'on')
})
togle.addEventListener('dblclick', function(){
    navigationBar.setAttribute('class', 'off')
})