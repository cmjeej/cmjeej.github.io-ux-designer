document.addEventListener("click", () => {
    const sound = new Audio("audio/Miau.mp3");
    sound.play();
    const tekst = document.getElementById("klik");
    if (tekst.innerText === "Welk geluid maakt ome faap?") {
        tekst.innerText = "Inderdaad hij miauwt :3";    
    } else{ 
        tekst.innerText = "Welk geluid maakt ome faap?";
    }
    function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
        
    
    const all = document.querySelectorAll("*");
    all.forEach(el => {
    el.style.color =randomColor ();

    });
});

