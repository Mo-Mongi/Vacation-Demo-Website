let barBtn = document.querySelector(".fa-bars");
let myUl = document.querySelector("nav ul")
let ulShow = false;
barBtn.addEventListener("click", function(){
    if(!ulShow){
        myUl.style.cssText = "height: 400px";
        ulShow = true;
    } else{
        myUl.style.cssText = "height: 0"
        ulShow = false;
    }
})






let myNums = document.querySelectorAll(".counters .num")
let mySection = document.querySelector(".memory h2")
let started = false;
function countDown(el){
    let goal = el.dataset.goal;
    let counter = setInterval(function(){
        let incre = Math.ceil(goal/200);
        let numInner = +el.innerHTML
        el.innerHTML = numInner + incre;
        if(numInner + incre >= goal){
            clearInterval(counter)
        }
    }, 20)
}


let myNav = document.querySelector('nav');
let myH1 = document.querySelector('h1');

window.onscroll = function(){
    if(window.scrollY >= myH1.offsetTop){
        myNav.classList.add("onscroll")
    }else{
        myNav.classList.remove("onscroll")
    }
    
    if(window.scrollY >= mySection.offsetTop){
        if(!started){
            myNums.forEach(function(num){
                countDown(num)
            })
        }
        started = true;
    }
}




// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 10000,
    stagePadding: 0,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        }
    }
})


new WOW().init();




let playBtn = document.querySelector(".pulse");
let videoDiv = document.querySelector(".videoDiv");
let myIframe = document.querySelector('iframe')
let closeBtn = document.querySelector('.fa-circle-xmark')
let closeShowed = false;

playBtn.addEventListener("click", function(){
    videoDiv.style.display = "block";
    myIframe.src = "https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0"
    myIframe.style.display = "block";
    closeBtn.style.display = "block";
    
})

closeBtn.addEventListener("click", function(){
    videoDiv.style.display = "none";
    myIframe.style.display = "none";
    myIframe.src=""
    closeBtn.style.display = "none";
})