import { splayPics } from "./imgCont.js";

(function () {

    const allImgs = document.querySelectorAll("img");
    allImgs.forEach(e => {
        e.addEventListener("click", (ee) => {
            // ee.classList.add("secret-dorite");
        })
    })

    const backdrop = document.getElementById("modalLand");
    const optionsMenu = document.getElementById("menuModal");
    const worksPanel = document.getElementById("workModal");
    const showMenuBtn = document.getElementById("showMenu");
    // menu Modal
    const showMenu = (e) => {
        e.stopPropagation();
        
        optionsMenu.classList.remove("hide");
        worksPanel.classList.add("hide");

        backdrop.classList.toggle("active");
    }

    backdrop.addEventListener("click", showMenu)
    showMenuBtn.addEventListener("click", showMenu)

    // work modal
    const allWorks = document.querySelectorAll(".inv-panel");
    
    
    splayPics();

})();