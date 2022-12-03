import { splayPics } from "./imgCont.js";

(function () {

    localStorage.setItem("mix-blend", "normal");
    localStorage.setItem("panel-scale", "3");
    localStorage.setItem("head-pic", "aa-art7.JPG");
    localStorage.setItem("head-font", "system-ui");
    console.log(localStorage)

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
    const closeBtn = document.querySelectorAll(".closeBtn");

    // menu Modal
    const showMenu = (e) => {
        e.stopPropagation();
        optionsMenu.classList.remove("hide");
        worksPanel.classList.add("hide");
        backdrop.classList.toggle("active");
    };

    const closeModal = (e) => {
        e.stopPropagation();
        if (e.target.id === "modalLand" || e.target.classList.contains("closeBtn") == 1) {
            backdrop.classList.toggle("active");
        }
    }

    backdrop.addEventListener("click", closeModal);
    showMenuBtn.addEventListener("click", showMenu);
    closeBtn.forEach(e => {
        e.addEventListener("click", closeModal);
    })
    

    // work modal
    const allWorks = document.querySelectorAll(".inv-panel");
    
    
    splayPics();

})();