const passport = document.getElementById("passport-screen");

const button = document.getElementById("beginJourney");

button.addEventListener("click",()=>{

    passport.style.opacity="0";

    setTimeout(()=>{

        passport.style.display="none";

    },1000);

});