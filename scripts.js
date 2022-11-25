console.log("bingo");

(function() {

    const allImgs = document.querySelectorAll("img");
    allImgs.forEach(e => {
        e.addEventListener("click", (ee) => {
            ee.classList.add("secret-dorite");
        })
    })

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

    const splayPics = () => {
        const myImg = "./24.jpg"
        const meatDump = document.getElementById("meat");
        const picFrag = document.createDocumentFragment();

        picDimArr.map(e => {
            const invImg = document.createElement("img");
            invImg.src = myImg;
            invImg.height = e.x;
            invImg.width = e.y;

            picFrag.appendChild(invImg);
        });

        meatDump.appendChild(picFrag);
    }

    splayPics();

})();