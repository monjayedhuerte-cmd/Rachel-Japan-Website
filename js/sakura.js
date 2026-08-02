const container = document.getElementById("petals-container");

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    petal.style.animationDelay =
        (Math.random() * 5) + "s";

    petal.style.width =
        (12 + Math.random() * 12) + "px";

    petal.style.height =
        (10 + Math.random() * 8) + "px";

    petal.style.opacity =
        0.5 + Math.random() * 0.5;

    container.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 17000);
}

setInterval(createPetal, 250);