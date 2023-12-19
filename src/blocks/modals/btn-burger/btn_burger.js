//Кнопки // // // // // // // // // // //
const btn_burger = document.querySelector(".button-burger"); 
const btn_crossburger = document.querySelector(".button-crossburger");

//Окно // // // // // // // // // // //
const modal_menu = document.querySelector(".modal-menu");
const modal_wind = modal_menu.querySelector(".modal-menu__window");
const modal_back = modal_menu.querySelector(".modal-menu__overlay");

const footer_up = document.querySelector(".modal-footer-up");
const header_right = document.querySelector(".header-right");
const add_buttons = document.querySelector(".add-buttons");
const main_buttons = document.querySelector(".main-buttons");
//События // // // // // // // // // // //
btn_burger.addEventListener("click", function(event){
    event.preventDefault();

    modal_back.style.left = 0;
    modal_wind.style.left = 0;

    setTimeout(() => {
        footer_up.prepend(add_buttons);
    }, 200);

    document.body.style.overflow = "hidden";
    
})

btn_crossburger.addEventListener("click", function(event){
    event.preventDefault();

    modal_back.style.left = "-1500px";
    modal_wind.style.left = "-500px";

    if (window.innerWidth >= 768){
        setTimeout(() => {
            header_right.prepend(add_buttons);
        }, 200);
    }

    document.body.style.overflow = "";
})

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (width > 1365){
        footer_up.prepend(add_buttons);
    } else if ((width < 1366) && (width > 767)) {
        header_right.prepend(add_buttons);
    } else if (width < 768) {
        footer_up.prepend(add_buttons);
    }

});

const width = window.innerWidth;
if (width > 1365){
    footer_up.prepend(add_buttons);
} else if ((width < 1366) && (width > 767)) {
    header_right.prepend(add_buttons);
}

// Заблюренная часть // // // // // // // // // // // // // // // // // // // // // // // // // // //

modal_back.addEventListener("click", function(event){
    event.preventDefault();

    modal_back.style.left = "-1500px";
    modal_wind.style.left = "-500px";

    if (window.innerWidth >= 768){
        setTimeout(() => {
            header_right.prepend(add_buttons);
        }, 200);
    }

    document.body.style.overflow = "";
})