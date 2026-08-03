const wishes=[

"🌸 May your dreams bloom like the sakura.",

"🗻 One day you'll stand before Mount Fuji.",

"🏮 Every journey begins with one wish.",

"💖 May happiness always find you.",

"🌸 May every season bring you beautiful memories.",

"🍀 May your heart always find peace.",

"🎋 Every wish has its perfect time.",

"✈️ Perhaps one day... you'll explore Japan."

];

const coin=document.getElementById("wishCoin");

const message=document.getElementById("wishMessage");

const scroll=document.getElementById("wishScroll");

const ripples=document.querySelectorAll(".ripple");

coin.addEventListener("click",()=>{

    const splash=document.querySelector(".splash");

    const pond=document.querySelector(".pond");

    coin.classList.remove("coin-drop");
    void coin.offsetWidth;
    coin.classList.add("coin-drop");

    pond.classList.remove("magic");
    void pond.offsetWidth;
    pond.classList.add("magic");

    splash.classList.remove("active");
    void splash.offsetWidth;
    splash.classList.add("active");

    ripples.forEach(r=>{

        r.classList.remove("showRipple");
        void r.offsetWidth;
        r.classList.add("showRipple");

    });

    const random=Math.floor(Math.random()*wishes.length);

    setTimeout(()=>{

        message.textContent=wishes[random];

        scroll.classList.add("show");

        coin.style.opacity="1";
        coin.classList.remove("coin-drop");

    },1300);

});