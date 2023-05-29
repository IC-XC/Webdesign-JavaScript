function hoeLaatIsHet() {
    document.getElementById("nu").innerText = new Date().toLocaleTimeString("nl-BE");
}

document.getElementById("zegEns").onclick = hoeLaatIsHet;



//document.getElementById("zegEns").onclick = function() {
    //document.getElementById("nu").innerText = new Date().toLocaleTimeString("nl-BE");
//};