// Создание элементов "Техника"
const tech_names = ["Ремонт ноутбуков", "Ремонт планшетов", "Ремонт телефонов", "Ремонт компьютеров", "Ремонт телевизоров", "Ремонт бытовой техники", "Ремонт телефонов", "Ремонт компьютеров", "Ремонт телевизоров", ];
const link = 
    `<a href="#" class="brand-button">
        <svg width="40" height="40" viewBox="0 0 40 40" >
            <use xlink:href="./images/sprite.svg#round-arrow"/>
        </svg>
    </a>`;
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
const types_tech = document.querySelector(".tech-list"); // Техника

for(let j = 0; j < tech_names.length; j++){
    create_tech(j);
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // //
function create_tech(count){
    const tech = document.createElement("li");

    tech.classList.add("swiper-slide", "tech-list__item", "tech-list__item--frame");

    const div = document.createElement("div");
    div.classList.add("tech-name", "tech-name--style");
    div.textContent = tech_names[count];

    tech.appendChild(div);
    tech.insertAdjacentHTML('beforeend', link);

    types_tech.appendChild(tech);
}





