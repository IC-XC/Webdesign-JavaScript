/*"use strict"; 
const eersteLi = document.querySelector("li");
console.log(eersteLi.parentElement.id);*/

/*"use strict";
const standbeeldenLijst = document.getElementById("standbeelden");
for (const childElement of standbeeldenLijst.children) { 
   console.log(childElement); 
}*/

/*"use strict"; 
const eersteLi = document.querySelector("li");
for (const sibling of eersteLi.parentElement.children) { 
   if (sibling!== eersteLi){
   console.log(sibling); 
   }
}*/

"use strict"; 
const tweedeLi = document.querySelector("li:nth-child(2)");
let volgendeSibling = tweedeLi.nextElementSibling;
while (volgendeSibling !== null){
   console.log(volgendeSibling); 
   volgendeSibling = volgendeSibling.nextElementSibling;
}
