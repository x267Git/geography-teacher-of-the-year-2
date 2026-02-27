const questions = [
    {
        text: "Выберите горную систему, которая расположена в европейской части России:",
        options: ["Алтай", "Саяны", "Урал", "Сихотэ-Алинь"],
        correct: 2  // Урал (индекс 2)
    },
    {
        text: "Какая горная система является самой высокой в России?",
        options: ["Уральские горы", "Крымские горы", "Кавказские горы", "Хибины"],
        correct: 2  // Кавказские горы
    },
    {
        text: "В какой горной системе находится гора Эльбрус?",
        options: ["Урал", "Алтай", "Кавказ", "Крымские горы"],
        correct: 2  // Кавказ
    },
    {
        text: "Какой тип растительности характерен для горных вершин Кавказа?",
        options: ["хвойные леса", "альпийские луга", "широколиственные леса", "степь"],
        correct: 1  // альпийские луга
    },
    {
        text: "Какие факторы влияют на формирование высотных поясов в горах?",
        options: [
            "высота над уровнем моря",
            "географическое положение",
            "климатические условия",
            "все перечисленные факторы"
        ],
        correct: 3  // все перечисленные факторы
    },
    {
        text: "Как называется зона, расположенная на высоте более 3000 метров над уровнем моря?",
        options: ["субальпийская", "альпийская", "нивальная", "лесная"],
        correct: 1  // альпийская
    },
    {
        text: "Какое растение характерно для альпийского пояса Кавказа?",
        options: ["берёза", "рододендрон", "ель", "дуб"],
        correct: 1  // рододендрон
    },
    {
        text: "Что такое высотная поясность?",
        options: [
            "изменение климата с высотой",
            "смена природных зон с высотой",
            "изменение растительности с высотой",
            "всё перечисленное"
        ],
        correct: 3  // всё перечисленное
    },
    {
        text: "Какая природная зона характерна для подножия Уральских гор?",
        options: ["тайга", "смешанные леса", "тундра", "степи"],
        correct: 0  // тайга
    },
    {
        text: "Почему высотные пояса в горах меняются с высотой?",
        options: [
            "из-за изменения температуры воздуха",
            "из-за смены климатических условий",
            "из-за уменьшения атмосферного давления",
            "из-за всех перечисленных факторов"
        ],
        correct: 3  // из-за всех перечисленных факторов
    }
];

const counter = document.querySelector(".counter")
const question_text = document.querySelector(".question-text")
const options = document.querySelectorAll(".option")
const next_button = document.querySelector(".next")

let current_question = -1;
let current_correct = 0;

function next() {
    if (next_button.classList.contains("active")) {
        current_question += 1;
        if (current_question < questions.length) {
            question_text.textContent = questions[current_question]["text"]
            options.forEach((option, index) => {
                counter.textContent = `${current_question + 1}/${questions.length}`
                option.firstElementChild.textContent = questions[current_question]["options"][index]
                current_correct = questions[current_question]["correct"]
            });
            options.forEach(option => { option.classList.remove("true"); option.classList.remove("false") })
            next_button.classList.remove("active")
        }
        else {
            next_button.classList.remove("active")
        }
    }
}

function check_ansver() {
    if (!next_button.classList.contains("active")) {
        if (current_question < questions.length - 1) { next_button.classList.add("active") }

        if (this.getAttribute("aid") == current_correct) {
            this.classList.add("true");
        }
        else {
            this.classList.add("false");
            document.querySelector(`[aid="${current_correct}"]`).classList.add("true")
        }

    }
}

next_button.addEventListener("click", next);
options.forEach(option => { option.addEventListener("click", check_ansver) })

next()
