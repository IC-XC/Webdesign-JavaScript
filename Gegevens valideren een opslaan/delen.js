"use strict";

document.getElementById("delen").onclick = function () {
    let allesOK = true;
    
    const getal1 = document.getElementById("getal1").value;
    const getal1Fout = document.getElementById("getal1Fout");
    if (getal1 ==="" || isNaN(getal1) || getal1 < 0){
        getal1Fout.hidden = false;
        allesOK = false;
    }else{
        getal1Fout.hidden=true;
    }    
   
    const getal2 = document.getElementById("getal2").value;
    const getal2Fout = document.getElementById("getal2Fout");
    if (getal2 ==="" || isNaN(getal2) || getal2 <= 0){
        getal2Fout.hidden = false;
        allesOK = false;
    }else{
        getal2Fout.hidden=true;
    }
   
    const delingSpan = document.getElementById("deling");
    if (allesOK) {
        delingSpan.hidden = false;
        delingSpan.innerText = getal1 / getal2;
    }else{
        delingSpan.hidden = true;
    }
};