import {price_keys, price_class, names_column} from "./prices_const";
// // // // // // // // // // // // // // // // // // // // // // // // // //

const price_list = document.querySelector(".price-list");

const btn_icon = 
    `<svg width="40" height="40" viewBox="0 0 40 40" class="btn-submit__icon">
        <use xlink:href="./blocks/main/btn-submit/goside.svg#goside">
    </svg>`

for (let i = 0; i < price_keys.length; i++){
    createPrice(Object.values(price_keys[i]), names_column); // Получаем объекты и создаем "Плашка/Цены" 
}

// // // // // // // // // // // // // // // // // // // // // // // // // //
function createPrice(array, names_column){
    const li = document.createElement("li");
    li.classList.add("price-list__item", "price-list__item--frame", "price-list__item--back", "swiper-slide");

    for (let i = 0; i < 3; i++){
        const span = document.createElement("span");
        span.classList.add("price-text", "price-text--style", price_class[i]);

        span.textContent = array[i];
        
        if (window.innerWidth < 768){ // Названия колонок - Цены
            //<span class="">ТЕКСТ</span><br> - Образец
            const name_col = document.createElement("span");
            name_col.classList.add("price-text", "price-text--title");
            name_col.textContent = names_column[i];
            
            span.insertAdjacentHTML('afterbegin', "<br>");
            span.prepend(name_col);
        }

        li.appendChild(span);
    }

    const btn_submit = document.createElement("button");
    btn_submit.classList.add("btn-submit", "btn-submit--style");

    const span_btn = document.createElement("span");
    span_btn.classList.add("btn-submit__text", "btn-submit__text--style");
    span_btn.textContent = "Заказать";

    btn_submit.appendChild(span_btn);
    btn_submit.insertAdjacentHTML('beforeend', btn_icon);

    li.appendChild(btn_submit);

    price_list.appendChild(li);
}

