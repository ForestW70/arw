import { splayPics } from "./imgCont.js";

(function () {

    const allImgs = document.querySelectorAll("img");
    allImgs.forEach(e => {
        e.addEventListener("click", (ee) => {
            // ee.classList.add("secret-dorite");
        })
    })

    const showMenuBtn = document.getElementById("showMenu");

    const showMenu = (e) => {
        e.stopPropagation();
        backdrop.classList.toggle("active");
    }

    const backdrop = document.getElementById("modalLand");
    
    backdrop.addEventListener("click", showMenu)
    showMenuBtn.addEventListener("click", showMenu)

    splayPics();

})();