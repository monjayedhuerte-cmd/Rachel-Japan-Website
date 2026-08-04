// ==========================================
// SAKURA TREE OF DREAMS
// ==========================================

(() => {

    const sakuraWishes = [

        "🌸 May every dream you hold bloom beautifully.",

        "🏮 Every journey begins with one brave step.",

        "💖 Happiness always finds those who never stop dreaming.",

        "🌸 Like Sakura, treasure every beautiful moment.",

        "🗻 May Japan welcome you someday.",

        "🍀 Peace will always find your heart.",

        "✨ Believe in beautiful beginnings.",

        "🌸 Your future is brighter than today's sunset."

    ];

    const sakuraButton = document.getElementById("sakuraWish");
    const emaBoard = document.getElementById("emaBoard");
    const emaText = document.getElementById("emaText");

    // Check if the HTML elements exist
    if (!sakuraButton || !emaBoard || !emaText) {

        console.error("Sakura Tree elements not found.");

        return;

    }

    sakuraButton.addEventListener("click", () => {

        const random = Math.floor(Math.random() * sakuraWishes.length);

        emaText.textContent = sakuraWishes[random];

        emaBoard.classList.remove("show");

        void emaBoard.offsetWidth;

        emaBoard.classList.add("show");

        sakuraButton.style.transform = "scale(.92)";

        setTimeout(() => {

            sakuraButton.style.transform = "scale(1)";

        }, 250);

        setTimeout(() => {

            emaBoard.classList.remove("show");

        }, 5000);

    });

})();