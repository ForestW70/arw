import { splayPics } from "./imgCont.js";

(function () {

    let localMix;
    let localScale;
    let localHeader;
    let localFont;
    if (localStorage.getItem("mix-blend") === null) {
        localStorage.setItem("mix-blend", "normal");
        localStorage.setItem("panel-scale", "3");
        localStorage.setItem("head-pic", "aa-art7.JPG");
        localStorage.setItem("head-font", "system-ui");
        localMix = "normal";
        localScale = 3;
        localHeader = "aa-art7.JPG";
        localFont = "system-ui";
    } else {
        localMix = localStorage.getItem("mix-blend");
        localScale = localStorage.getItem("panel-scale");
        localHeader = localStorage.getItem("head-pic");
        localFont = localStorage.getItem("head-font");
    }
    

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
    

    // changed variables
    const bodyMix = document.getElementById("meat");
    const bodyHeroMix = document.getElementById("shownWork");
    const headerPic = document.getElementById("headDisp");
    const headerFont = document.getElementById("isMe");

    const saveBtn = document.getElementById("saveBtn");
    const resetBtn = document.getElementById("resetBtn");

    saveBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const mixVal = document.getElementById("mixInp").value || "normal";
        const headVal = document.getElementById("picInp").value || "aa-art7.JPG";
        const fontVal = document.getElementById("fontInp").value || "system-ui";
        const scaleVal = document.getElementById("scaleInp").value || "system-ui";

        localStorage.setItem("mix-blend", mixVal);
        localStorage.setItem("head-pic", headVal);
        localStorage.setItem("head-font", fontVal);
        localStorage.setItem("panel-scale", scaleVal);

        window.location.reload();
    });

    // resetBtn.addEventListener("click", () => {
    //     localStorage.setItem("mix-blend", null);
    //     window.location.reload();
    // })


    bodyMix.style.mixBlendMode = localMix;
    bodyHeroMix.style.mixBlendMode = localMix;
    headerPic.style.backgroundImage = `url(https://forestw70.github.io/arw/assets/aaStash/${localHeader})`;
    headerFont.style.fontFamily = localFont;
    
    
    splayPics(localScale);

})();