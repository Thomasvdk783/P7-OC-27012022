"use strict";

////////////////////////////////////////////////////////////////

export function dropdownAppareils() {
  const btnAppareils = document.getElementById("btnAppareil");
  const dropContentAppareils = document.querySelector(".dropdown-content-appareil");
  const iconAppareils = document.getElementById("icon-appareils");
  const inputAppareils = document.getElementById("myInputAppareil");

  // au clique sur le bouton
  // une liste d'appareils apparaît
  btnAppareils.addEventListener("click", function () {
    dropContentAppareils.classList.toggle("show-dropdown-content-appareils");
    iconAppareils.classList.toggle("fa-chevron-up");
    btnAppareils.classList.toggle("btn-width");
    inputAppareils.classList.toggle("input-width");
  });
}
