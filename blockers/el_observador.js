'use strict';

document.addEventListener("DOMSubtreeModified", function(event){
    if(document.querySelectorAll(".fade")) {
      var paywall = document.querySelectorAll('.cuerpo.fade');
      [].forEach.call(paywall, function(e) { e.classList.remove('fade') });
    }
});
