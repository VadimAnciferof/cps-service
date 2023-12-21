// Позиционирование кнопок - Header // // // // // // // // // // // // // // // // // // // // // // // // // // 
const main_but = document.querySelector(".main-buttons");
const page_title = document.querySelector(".page-title");
const header_right = document.querySelector(".header-right");

const checkstatus = main_but.querySelector(".checkstatus-block")
const repair = main_but.querySelector(".repair-block");

const span_checkstatus = document.createElement("span");
span_checkstatus.classList.add("text-main-button", "text-main-button--style");
span_checkstatus.textContent = "Оставить заявку"

const span_repair = document.createElement("span");
span_repair.classList.add("text-main-button", "text-main-button--style");
span_repair.textContent = "Статус ремонта"


if (window.innerWidth > 1365){
    repair.prepend(span_repair);
    checkstatus.prepend(span_checkstatus);
    page_title.appendChild(main_but);
}

let check = false
window.addEventListener ("resize", () => {
    if (window.innerWidth > 1365){
        repair.prepend(span_repair);
        checkstatus.prepend(span_checkstatus);
        page_title.appendChild(main_but);
        check = true;
    } else {
        if (check == true){
            repair.removeChild(span_repair);
            checkstatus.removeChild(span_checkstatus);
            check = false;
        }

        header_right.appendChild(main_but);
    }
})