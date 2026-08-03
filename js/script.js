const btn = document.getElementById("enter");

if(btn){

    btn.addEventListener("mouseover",()=>{

        btn.innerHTML="🌸 Welcome";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.innerHTML="🌸 Begin Journey";

    });

}

const backTop = document.getElementById("backTop");

if(backTop){

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

const restartBtn = document.getElementById("journeyAgain");
const fade = document.getElementById("pageFade");

if (restartBtn && fade) {

    restartBtn.addEventListener("click", () => {

        fade.classList.add("show");

        setTimeout(() => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1200);

        setTimeout(() => {

            fade.classList.remove("show");

        }, 2800);

    });

}
