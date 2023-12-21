const text_sec = ["Читать далее", "Свернуть"];
const block_sec = ["Показать все", "Свернуть"];

const tech_names = [".tech-conteiner", ".tech-list"];
const brands_names = [".brands-conteiner", ".brands-list"];
const about_names = [".about-wrapper", ".about__text"];

// // // // // // // // // // // // // // // // // // // // // //

createBtnMore(text_sec, about_names, "btn-more-2");

if (window.innerWidth > 767){
    createBtnMore(block_sec, brands_names, "btn-more-1");
    createBtnMore(block_sec, tech_names, "btn-more-3");
}

// // // // // // // // // // // // // // // // // // // // // //

function createBtnMore(text, names, id){
    const btn_html = 
    `<input id="${id}" type="checkbox" class="btn-more-checkbox btn-more-checkbox--hidden" >
        <label for="${id}" class="btn-more-text btn-more-text--style">
            <span class="btn-more-text__type">${text[0]}</span>
        </label>`;

    const conteiner = document.querySelector(names[0]);
    const conteiner_content = conteiner.querySelector(names[1]);

    conteiner.insertAdjacentHTML('beforeend', btn_html); // Кнопка в DOM

    const btn_more = conteiner.querySelector(".btn-more-checkbox");
    const btn_text = conteiner.querySelector(".btn-more-text__type");

    // Измнение-высоты-блока // // // // // // // // // // // // // // 

    const initialMaxHeight = window.getComputedStyle(conteiner_content).maxHeight;

    btn_more.addEventListener("change", function(event) {
        event.preventDefault();
        
        if (this.checked){
            conteiner_content.style.maxHeight = "none";
            btn_text.textContent = text[1];
        } else {
            conteiner_content.style.maxHeight = initialMaxHeight;
            btn_text.textContent = text[0];

        }
    
    });

}
