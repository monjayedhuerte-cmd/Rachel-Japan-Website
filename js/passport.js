const passportScreen=document.getElementById("passport-screen");
const passport=document.querySelector(".passport");

const petals=document.getElementById("petal-transition");
const overlay=document.getElementById("transition-overlay");

document
.getElementById("beginJourney")
.addEventListener("click",()=>{

passport.classList.add("closing");

setTimeout(()=>{

petals.classList.add("active");

},600);

setTimeout(()=>{

overlay.classList.add("show");

},1700);

setTimeout(()=>{

passportScreen.style.display="none";

overlay.classList.remove("show");

},2600);

});