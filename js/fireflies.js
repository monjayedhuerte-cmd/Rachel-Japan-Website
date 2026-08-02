const fireflyContainer = document.getElementById("fireflies");

function createFirefly(){

    const dot = document.createElement("div");

    dot.classList.add("firefly");

    dot.style.left=Math.random()*100+"vw";

    dot.style.bottom=Math.random()*120+"px";

    dot.style.animationDuration=
        4+Math.random()*5+"s";

    fireflyContainer.appendChild(dot);

    setTimeout(()=>{

        dot.remove();

    },9000);

}

setInterval(createFirefly,350);