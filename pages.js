const pages = document.querySelectorAll(".page");

let buttons, arrow

if (window.matchMedia("(max-width: 768px)").matches) {
    buttons = document.querySelectorAll(".side-button");
    arrow = document.querySelector(".side-menu-arrow");
    setTimeout(() => { arrow.style.top = "130px" }, 400)
    const object = document.querySelector('.my-object');
    setInterval(upd_arrow, 100)
    const menu = document.querySelector(".side-menu")
    arrow.addEventListener("click", function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            menu.classList.remove("active");
        }
        else {
            this.classList.add("active");
            menu.classList.add("active");
        }
    });
}
else { buttons = document.querySelectorAll(".button, .basic"); }


buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(button => { button.classList.remove("pressed"); })
        button.classList.add("pressed");
        pages.forEach(page => { page.classList.remove("active"); })
        const page_id = button.getAttribute("page-id");
        const page = document.querySelector(`.page[page-id="${page_id}"`)
        page.classList.add("active");
    })
});

function upd_arrow() {
    const stayScroll = (document.documentElement.scrollHeight - window.innerHeight) - window.scrollY
    if (stayScroll < 300) { arrow.style.width = (40 + 100 - stayScroll / 3) + 'px'; }
    else { arrow.style.width = "40px" }
};