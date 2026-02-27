const buttons = document.querySelectorAll(".button, .basic")
const pages = document.querySelectorAll(".page")

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(button => { button.classList.remove("pressed") })
        button.classList.add("pressed")
        pages.forEach(page => { page.classList.remove("active") })
        const page_id = button.getAttribute("page-id");
        const page = document.querySelector(`.page[page-id="${page_id}"`)
        page.classList.add("active")
    })
});

