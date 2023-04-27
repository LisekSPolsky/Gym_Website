const burgerTrigerElements = document.querySelectorAll(".burgerTrigger")
const burger = document.querySelector(".burger")
const menuOptions = document.querySelectorAll(".menuOption")

function show() {
    for (let i = 0; i < burgerTrigerElements.length; i++) {
        burgerTrigerElements[i].classList.toggle("show")  
    }
}
burger.addEventListener("click", show)

for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", show)
}