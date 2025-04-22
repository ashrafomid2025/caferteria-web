const bars = document.getElementById("bars");
const ul = document.getElementById("ul");
bars.addEventListener("click",()=>{
    ul.classList.remove("hidden");
    ul.classList.add("flex");
})