"use strict";
const foutDiv = document.getElementById("fout");
for (const input of document.getElementsByTagName("input")) {
    input.onblur = function () {
        foutDiv.hidden = this.value !== "";
    };
} 