


/*"use strict"; 
const tweedeA = document.querySelector("li:nth-child(2)");
let volgendeSibling = tweedeA.nextElementSibling;
console.log(volgendeSibling);*/

"use strict"; 
const voorlaatsteLi= document.querySelector("li:nth-last-child(2)");
let vorigeSibling = voorlaatsteLi.previousElementSibling;
while (vorigeSibling !== null){
   console.log(vorigeSibling); 
   vorigeSibling = vorigeSibling.previousElementSibling;
}




/*"use strict"; 
const eersteA = document.querySelector("a");
for (const sibling of merken.parentElement.children) { 
   if (sibling!==merken){
   console.log(sibling); 
   }
}*/