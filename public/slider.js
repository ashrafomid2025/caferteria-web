const slider = document.getElementById("hero");
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const div1 = document.getElementById("div1");

const imageLinks = [
    "../assets/images/slide1.jpg",
    "../assets/images/slide2.jpg",
    "../assets/images/slide3.jpg",
];
let index = 0;
setInterval(()=>{
    slider.style.backgroundImage = `url(${imageLinks[index]})`;
    index = (index+1) % imageLinks.length;
    if(index===1){
        div1.classList.add("justify-start");
        div1.classList.remove("text-green-500");
    }
    else if(index ==2 ){
        div1.classList.remove("justify-start");
        div1.classList.add("justify-end");
        div1.classList.add("text-green-500");
    }
    else{
        div1.classList.remove("justify-start");
        div1.classList.remove("justify-end");
        div1.classList.add("justify-center");
        div1.classList.remove("text-green-500");
    }
   
},6000);
btnRight.addEventListener("click",()=>{
    slider.style.backgroundImage = `url(${imageLinks[index]})`;
    index = (index+1) % imageLinks.length;
    
  
});
btnLeft.addEventListener("click",()=>{
    slider.style.backgroundImage = `url(${imageLinks[index]})`;
    index = (index+1) % imageLinks.length;
});

