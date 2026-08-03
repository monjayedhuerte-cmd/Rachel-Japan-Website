const btn = document.getElementById("enter");

btn.addEventListener("mouseover",()=>{

btn.innerHTML="🌸 Welcome";

});

btn.addEventListener("mouseleave",()=>{

btn.innerHTML="🌸 Begin Journey";

});

const backTop = document.getElementById("backTop");

backTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

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
