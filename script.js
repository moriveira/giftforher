const heart = document.querySelector(".heart");
const present = document.querySelector("#present");
const letter = document.querySelector(".letter");

heart.addEventListener("click", function() {
    if (letter.classList.contains("open")) return;

    letter.classList.toggle("open");
});

heart.addEventListener("click", function() {
    present.style.display = "none";
});
