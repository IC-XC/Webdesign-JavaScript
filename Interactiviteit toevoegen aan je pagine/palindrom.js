"use strict";
document.getElementById("woord").onblur = function () {
    let omgekeerd = "";
    for (const teken of this.value) {
        omgekeerd = teken + omgekeerd;
    }
document.getElementById("feedback").innerText = omgekeerd === this.value ?
    "Dit is een palindroom." : "Dit is geen palindroom."; 
};