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
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art0.jpeg",
        hit: "1525",
        wid: "1200",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art1.jpeg",
        hit: "946",
        wid: "1200",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art2.jpeg",
        hit: "1271",
        wid: "1200",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art3.jpg",
        hit: "1480",
        wid: "1200",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art4.jpg",
        hit: "1800",
        wid: "1440",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art5.jpg",
        hit: "757",
        wid: "1500",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art6.jpg",
        hit: "572",
        wid: "902",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art7.jpg",
        hit: "1792",
        wid: "1344",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art8.jpg",
        hit: "1749",
        wid: "1792",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-art9.jpg",
        hit: "1792",
        wid: "1399",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-col1.jpeg",
        hit: "1890",
        wid: "1512",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-col2.jpeg",
        hit: "1632",
        wid: "1043",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-col3.jpeg",
        hit: "1814",
        wid: "1143",
    },
    {
        title: "",
        blurb: "",
        url: "../assets/aaStash/aa-col4.jpeg",
        hit: "1606",
        wid: "1209",
    },

]

export const splayPics = () => {
    const myImg = "../assets/aaStash/aa-col0.heic"
    const meatDump = document.getElementById("meat");
    const picFrag = document.createDocumentFragment();

    aairosWisilco.map(e => {
        const invImg = document.createElement("img");
        invImg.src = e.url;
        invImg.height = e.hit / 4;
        invImg.width = e.wid / 4;

        if (Math.random() >= .5) {
            picFrag.appendChild(invImg);

        } else {
            picFrag.insertBefore(invImg, picFrag.firstChild);
        }
    });

    meatDump.appendChild(picFrag);
}