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
export {createBtnMore}