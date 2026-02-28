const pages = document.querySelectorAll(".page");

let buttons, arrow, overlay
let active = false
if (window.matchMedia("(max-width: 768px)").matches) {

    overlay = document.querySelector(".overlay")
    buttons = document.querySelectorAll(".side-button");
    arrow = document.querySelector(".side-menu-arrow");

    setTimeout(() => { arrow.style.top = "50px" }, 400)

    const object = document.querySelector('.my-object');
    const menu = document.querySelector(".side-menu")

    arrow.addEventListener("click", open_close);
    overlay.addEventListener("click", open_close)

    const el_list = [arrow, menu, overlay]

    function open_close() {
        if (active) { el_list.forEach(el => { el.classList.remove("active") }) }
        else { el_list.forEach(el => { el.classList.add("active") }) }
        active = !active
    }
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
