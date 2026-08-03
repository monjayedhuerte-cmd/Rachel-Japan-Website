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

    coin.classList.remove("coin-drop");

    void coin.offsetWidth;

    coin.classList.add("coin-drop");

    ripples.forEach(r=>{

        r.classList.remove("showRipple");

        void r.offsetWidth;

        r.classList.add("showRipple");

    });

    const random=Math.floor(Math.random()*wishes.length);

    setTimeout(()=>{

        message.innerHTML=wishes[random];

        scroll.classList.add("show");

    },900);

});