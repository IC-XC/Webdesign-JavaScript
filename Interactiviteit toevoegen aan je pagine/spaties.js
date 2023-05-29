document.getElementById("toonAantalSpaties").onclick = function () {
    let aantalSpaties = 0;
    for (const teken of document.getElementById("teckst").value) {
        if (teken === " ") {
            aantalSpaties++;
        }
    }
document.getElementById("aantalSpaties").innerText = aantalSpaties;
};