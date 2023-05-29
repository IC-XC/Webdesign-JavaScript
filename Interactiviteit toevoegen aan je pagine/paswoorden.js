"use strict";
document.getElementById("paswoord").oninput = function () {
   const paswoord = document.getElementById("paswoord").value;
   const paswoordFeedbackSpan = document.getElementById("paswoordFeedback");
   if (paswoord.length >= 6) { 
      paswoordFeedbackSpan.innerText = "OK";
   } 
   else {
     paswoordFeedbackSpan.innerText = "Te kort";
   }
};