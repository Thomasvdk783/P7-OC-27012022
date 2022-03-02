"use strict";

////////////////////////////////////////////////////////////////

export function dropDownUstensiles() {
    const btnUstensiles = document.getElementById('btn-ustensils')
    const dropContentUstensiles = document.getElementById('myDropdownUstensiles')
    const iconUstensiles = document.getElementById('icon-ustensils')
    const inputUstensiles = document.getElementById('myInputUstensiles')

    btnUstensiles.addEventListener('click', function (){
        dropContentUstensiles.classList.toggle('show-dropdown-content-ustensiles')
        iconUstensiles.classList.toggle('fa-chevron-up')
        btnUstensiles.classList.toggle('btn-width')
        inputUstensiles.classList.toggle('input-width')
    })
}