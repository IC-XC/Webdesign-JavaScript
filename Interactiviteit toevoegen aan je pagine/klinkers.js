"use strict";
document.getElementById("tekst").oninput = function () {
    let aantalKlinkers = 0;
    for (const teken of this.value.toLowerCase()) {
        if ("aeiou".includes(teken)) {
            aantalKlinkers++;
        }
    }
document.getElementById("aantalKlinkers").innerText = aantalKlinkers;
};