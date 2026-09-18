document.addEventListener("click", () => {
    const sound = new Audio("audio/Miau.mp3");
    sound.play();
    const tekst = document.getElementById("klik");
    if (tekst.innerText === "Welk geluid maakt ome faap?") {
        tekst.innerText = "Inderdaad hij miauwt :3";    
    } else{ 
        tekst.innerText = "Welk geluid maakt ome faap?";
    }
});
