const pages = document.querySelectorAll(".page");

let buttons, arrow, overlay, el_list
let active = false

function open_close(els) {
    if (active) { el_list.forEach(el => { el.classList.remove("active") }) }
    else { el_list.forEach(el => { el.classList.add("active") }) }
    active = !active
}

if (window.matchMedia("(max-width: 1024px)").matches) {

    overlay = document.querySelector(".overlay")
    buttons = document.querySelectorAll(".side-button");
    arrow = document.querySelector(".side-menu-arrow");

    setTimeout(() => { arrow.style.top = "50px" }, 400)

    const object = document.querySelector('.my-object');
    const menu = document.querySelector(".side-menu")

    arrow.addEventListener("click", open_close);
    overlay.addEventListener("click", open_close)

    el_list = [arrow, menu, overlay]

    open_close(el_list)
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
        if (active) { open_close(el_list) }
    })
});
