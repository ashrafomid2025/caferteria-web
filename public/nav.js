const bars = document.getElementById("bars");
const ul = document.getElementById("ul");
const times = document.getElementById("times");
bars.addEventListener("click",()=>{
    ul.classList.remove("hidden");
    ul.classList.add("flex");
});
times.addEventListener("click",()=>{
    ul.classList.remove("flex");
    ul.classList.add("hidden");
})

