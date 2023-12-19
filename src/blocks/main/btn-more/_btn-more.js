import {text_sec, block_sec, tech_names, brands_names, about_names} from "./_btn-more_const";
import {createBtnMore} from "./_btn-more_func";

createBtnMore(text_sec, about_names, "btn-more-2");

if (window.innerWidth > 767){
    createBtnMore(block_sec, brands_names, "btn-more-1");
    createBtnMore(block_sec, tech_names, "btn-more-3");
}
