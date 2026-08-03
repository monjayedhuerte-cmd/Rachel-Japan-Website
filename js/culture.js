// ==========================================
// CULTURE SECTION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // Elements
    const image = document.getElementById("cultureImage");
    const title = document.getElementById("cultureTitle");
    const description = document.getElementById("cultureDescription");
    const history = document.getElementById("cultureHistory");
    const place = document.getElementById("culturePlace");
    const season = document.getElementById("cultureSeason");
    const fact = document.getElementById("cultureFact");

    const buttons = document.querySelectorAll(".culture-btn");

    const progress = document.getElementById("cultureCount");

    const card = document.querySelector(".culture-card");

    const visited = new Set();

    // Default explored topic
    visited.add("hanami");

    // -------------------------------
    // Load Culture
    // -------------------------------

    function loadCulture(topic){

        const data = japanCulture[topic];

        if(!data) return;

        card.classList.add("change");

        image.style.opacity = 0;

        setTimeout(()=>{

            image.src = data.image;
            image.alt = data.title;

            title.textContent = data.title;
            description.textContent = data.description;
            history.textContent = data.history;
            place.textContent = data.place;
            season.textContent = data.season;
            fact.textContent = data.fact;

            image.style.opacity = 1;

            card.classList.remove("change");

        },300);

    }

    // -------------------------------
    // Buttons
    // -------------------------------

    buttons.forEach(button=>{

        button.addEventListener("click",function(){

            buttons.forEach(btn=>{

                btn.classList.remove("active");

            });

            this.classList.add("active");

            visited.add(this.dataset.topic);

            progress.textContent = visited.size;

            loadCulture(this.dataset.topic);

        });

    });

    // -------------------------------
    // Initial Load
    // -------------------------------

    progress.textContent = visited.size;

    loadCulture("hanami");

});