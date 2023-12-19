const modal_con = document.querySelector(".modal-menu-content");


if ((window.innerHeight <= 1024) && (window.innerHeight >= 600)) {
    modal_con.style.minHeight = window.innerHeight + "px";

} else if (window.innerHeight > 1024) {
    modal_con.style.minHeight = "1024px";
}

window.addEventListener("resize", () => {
    height = window.innerHeight;

    if ((height <= 1024) && (height >= 600)){
        modal_con.style.minHeight = height + "px";
    }
});
