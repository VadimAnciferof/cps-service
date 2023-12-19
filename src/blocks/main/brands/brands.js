// Создание элементов "бренд"
const name_brands = ["Acer", "Bosch", "Lenovo", "Samsung", "Sony", "Viewsonic", "Samsung", "Sony", "Viewsonic"]
const src_link = "./blocks/main/brands/images/"; // ./blocks/main/brands/images/Acer.png
const link = 
    `<a href="#" class="brand-button">
        <svg width="40" height="40" viewBox="0 0 40 40" >
            <use xlink:href="./images/sprite.svg#round-arrow"/>
        </svg>
    </a>`

const brands = document.querySelector(".brands-list"); // Бренды

for(let j = 0; j < name_brands.length; j++){
    create_brand(j);
}


function create_brand(count){
    const brand = document.createElement("li");

    brand.classList.add("swiper-slide", "brands-list__item", "brands-list__item--frame");

    const div = document.createElement("div");
    div.classList.add("brand-logo-conteiner");

    const logo = document.createElement("img")
    brand.classList.add("brand-logo");
    logo.src = "./blocks/main/brands/images/Acer.png"; //src_link + name_brands[count] + ".png";
    div.appendChild(logo);

    brand.appendChild(div);

    brand.insertAdjacentHTML('beforeend', link);

    brands.appendChild(brand);
}





