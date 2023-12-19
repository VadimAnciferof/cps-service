//Кнопки // // // // // // // // // // //
const btn_chat = document.querySelector(".button-chat"); 
const btn_call = document.querySelector(".button-call"); 
const btn_crossform = document.querySelector(".button-crossform");

//Окно // // // // // // // // // // //
const modal_form = document.querySelector(".modal-form");
const modal_wind = modal_form.querySelector(".modal-form__window");
const modal_back = modal_form.querySelector(".modal-form__overlay");
// 
const form_array = modal_form.querySelectorAll(".form");
const form_title = modal_form.querySelector(".form-title__text");

const width = window.innerWidth;
modal_back.style.right = "-" + width + "px";
//События CHAT// // // // // // // // // // //

window.addEventListener("resize", ()=>{

    modal_back.style.right = "-" + window.innerWidth + "px";
})

btn_chat.addEventListener("click", function(event){
    event.preventDefault();
    
    modal_back.style.right = 0;

    modal_wind.style.right = 0;
    form_title.textContent = "Обатная связь";
    form_array.forEach((item, index)=>{

        if (index != 1){
            item.classList.remove("form--hidden");
        }

    })

    document.body.style.overflow = "hidden";

})

btn_crossform.addEventListener("click", function(event){
    event.preventDefault();

    modal_back.style.right = "-" + window.innerWidth + "px";

    modal_wind.style.right = "-700px";

    document.body.style.overflow = ""

})
    
//События CALLBACK// // // // // // // // // // //

btn_call.addEventListener("click", function(event){
    event.preventDefault();

    modal_back.style.right = 0;
    modal_wind.style.right = 0;
    form_title.textContent = "Заказать звонок";
    form_array.forEach((item, index)=>{

        if (index != 1){
            item.classList.add("form--hidden");
        }

    })

    document.body.style.overflow = "hidden";
})
// Заблюренная часть // // // // // // // // // // // // // // // // // // // // // // // // // // //

modal_back.addEventListener("click", function(event){
    event.preventDefault();

    modal_back.style.right = "-" + window.innerWidth + "px";

    modal_wind.style.right = "-700px";

    document.body.style.overflow = ""

})

// document.body.style.overflow = "hidden"; выключает скролл
// document.body.style.overflow = "";       включает скролл