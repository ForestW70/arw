const picDimArr = [
    {
        x: 150,
        y: 200
    },
    {
        x: 200,
        y: 200
    },
    {
        x: 100,
        y: 300
    },
    {
        x: 200,
        y: 300
    },
    {
        x: 200,
        y: 150
    },
    {
        x: 250,
        y: 200
    },
];

export const aairosWisilco = [
    {
        title: "title",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art0.jpeg",
        hit: "1525",
        wid: "1200",
    },
    {
        title: "title",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art1.jpeg",
        hit: "946",
        wid: "1200",
    },
    {
        title: "titler",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art2.jpeg",
        hit: "1271",
        wid: "1200",
    },
    {
        title: "art3",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art3.JPG",
        hit: "1480",
        wid: "1200",
    },
    {
        title: "art4",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art4.jpg",
        hit: "1800",
        wid: "1440",
    },
    {
        title: "art5",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art5.JPG",
        hit: "757",
        wid: "1500",
    },
    {
        title: "art6",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art6.JPG",
        hit: "572",
        wid: "902",
    },
    {
        title: "art7",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art7.JPG",
        hit: "1792",
        wid: "1344",
    },
    {
        title: "boingo",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art8.JPG",
        hit: "1749",
        wid: "1792",
    },
    {
        title: "art9",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-art9.JPG",
        hit: "1792",
        wid: "1399",
    },
    {
        title: "title",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-col1.jpeg",
        hit: "1890",
        wid: "1512",
    },
    {
        title: "TITLE",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-col2.jpeg",
        hit: "1632",
        wid: "1043",
    },
    {
        title: "col3",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-col3.jpeg",
        hit: "1814",
        wid: "1143",
    },
    {
        title: "col4",
        blurb: "",
        url: "",
        local: "/assets/aaStash/aa-col4.jpeg",
        hit: "1606",
        wid: "1209",
    },

]

export const splayPics = () => {
    const myImg = "/assets/aaStash/aa-col0.heic"
    const meatDump = document.getElementById("meat");
    const picFrag = document.createDocumentFragment();

    aairosWisilco.map(e => {
        const panel = document.createElement("article");
        panel.classList.add("inv-panel");

        const invImg = document.createElement("img");
        invImg.src = `https://forestw70.github.io/arw${e.local}`;
        invImg.height = e.hit / 4;
        invImg.width = e.wid / 4;

        const imgTit = document.createElement("p");
        imgTit.innerText = `"${e.title}"`;
        
        panel.appendChild(invImg);
        panel.appendChild(imgTit);

        if (Math.random() >= .5) {
            picFrag.appendChild(panel);

        } else {
            picFrag.insertBefore(panel, picFrag.firstChild);
        }
    });

    meatDump.appendChild(picFrag);
}