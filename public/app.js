const dropdown = document.querySelector(".dropdown");
const navbar__hamburger = document.querySelector(".navbar__hamburger");
const dropdown__hamburger = document.querySelector(".dropdown__hamburger");

navbar__hamburger.addEventListener("click", () => {
    dropdown.style.transform = "translateX(0)";
})

dropdown__hamburger.addEventListener("click",() => {
    dropdown.style.transform = "translateX(100%)";
})

