const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-icon");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
    let isShowing = menu.classList.contains("show");

    if (isShowing) {
        menu.classList.remove("show");
        body.classList.remove("overflow");
    }
    else {
        menu.classList.add("show");
        body.classList.add("overflow");
    }
})