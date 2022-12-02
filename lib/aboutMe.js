const mePics = [
    {
        title: "irl",
        blurb: "Here's a thing about me",
        url: "",
        local: "/assets/aaStash/aa-irl0.jpeg",
        hit: "1120",
        wid: "1680",
    },
    {
        title: "irl",
        blurb: "Here's a second thing about me",
        url: "",
        local: "/assets/aaStash/aa-irl1.jpeg",
        hit: "1443",
        wid: "962",
    },
    {
        title: "irl",
        blurb: "Wow theres so much about me!",
        url: "",
        local: "/assets/aaStash/aa-irl2.jpeg",
        hit: "1120",
        wid: "1680",
    },
    {
        title: "irl",
        blurb: "There is no fourth thing about me.",
        url: "",
        local: "/assets/aaStash/aa-irl3.jpg",
        hit: "1800",
        wid: "1440",
    },
    {
        title: "irl",
        blurb: "That fifth thing though! It's CRAZY",
        url: "",
        local: "/assets/aaStash/aa-irl4.jpg",
        hit: "1800",
        wid: "1440",
    },
    {
        title: "irl",
        blurb: "Were about out of thing about me",
        url: "",
        local: "/assets/aaStash/aa-irl5.jpg",
        hit: "1439",
        wid: "1440",
    },
    {
        title: "irl",
        blurb: "actually there is a lot more about me but we'll have to get to that in a later edition.",
        url: "",
        local: "/assets/aaStash/aa-irl6.jpg",
        hit: "1440",
        wid: "1440",
    },
];

(function () {

    // const headHome = document.getElementById("goBack");
    // headHome.addEventListener("click", () => {
    //     window.location.href = "http://127.0.0.1:5500/index.html";
    // })
    const meMeMe = document.getElementById("meFun")
    const aboutMeat = document.createDocumentFragment();

    mePics.map((e, i) => {
        const aboutSlice = document.createElement("article");
        const aboutPic = document.createElement("img");
        const aboutBlurb = document.createElement("p");

        aboutSlice.classList.add("about-slice");
        aboutPic.src = `https://forestw70.github.io/arw${e.local}`;
        aboutPic.height = e.hit / 3;
        aboutPic.width = e.wid / 3;
        aboutBlurb.innerText = e.blurb;

        aboutSlice.appendChild(aboutPic);

        if (i%2 === 0) {
            aboutSlice.appendChild(aboutBlurb);
        } else {
            aboutSlice.insertBefore(aboutBlurb, aboutSlice.firstChild);
        }
        aboutMeat.appendChild(aboutSlice);
    })
    meMeMe.appendChild(aboutMeat)
})();