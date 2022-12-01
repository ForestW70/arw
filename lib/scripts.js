import { splayPics } from "./imgCont.js";

(function() {

    const allImgs = document.querySelectorAll("img");
    allImgs.forEach(e => {
        e.addEventListener("click", (ee) => {
            ee.classList.add("secret-dorite");
        })
    })

    

    splayPics();

})();