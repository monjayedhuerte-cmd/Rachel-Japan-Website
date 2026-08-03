function toggleLetter() {

    const letter = document.getElementById("letterPaper");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";
    }

}