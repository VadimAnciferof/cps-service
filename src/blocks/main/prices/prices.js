// Создание списка цен // // // // // // // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // // // // // // // //
const price_keys = [{
    type: "Диагностика",
    price: "Бесплатно",
    time: "30 мин"
},
{
    type: "Замена дисплея",
    price: "1000 ₽",
    time: "30-120 мин"
},
{
    type: "Замена полифонического динамика",
    price: "1000 ₽",
    time: "30-120 мин"
},
{
    type: "Тестирование с выдачей технического заключения",
    price: "1000 ₽",
    time: "30-120 мин"
},
{
    type: "Замена програмного обеспечения",
    price: "1000 ₽",
    time: "30-120 мин"
}]

const price_class = ["text-type", "text-price", "text-time"];
const names_column = ["Ремонтные услуги", "Цена", "Срок"];
// // // // // // // // // // // // // // // // // // // // // // // // // //

const price_list = document.querySelector(".price-list");

const btn_icon = 
    `<a href="#"><svg width="40" height="40" viewBox="0 0 40 40" class="btn-submit__icon">
        <use xlink:href="./images/sprite.svg#goside">
    </svg></a>`

for (let i = 0; i < price_keys.length; i++){
    createPrice(Object.values(price_keys[i]), names_column); // Получаем объекты и создаем "Плашка/Цены" 
}

// // // // // // // // // // // // // // // // // // // // // // // // // //
function createPrice(array, names_column){
    const li = document.createElement("li");
    li.classList.add("price-list__item", "price-list__item--frame", "price-list__item--back", "swiper-slide");
    
    const count_title_price = 3 // Кол-во заголовков в плашке "Цены"
    for (let i = 0; i < count_title_price; i++){ // Заголовки пунктов для Mobile
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

