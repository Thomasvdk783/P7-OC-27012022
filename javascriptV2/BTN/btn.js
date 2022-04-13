
import {btnSearchData} from "../btnSearchData.js" 

// BTN ingredients

// console.log('BTN ingrédients')

export const btn = async (data) => {
  const recipes = data;
  const sortArrayIngredients = [];
  const sortArrayUstensiles = [];
  const sortArrayAppareils = [];
  const showCardResult = [];

  // Init constantes Badge
  const boxBadges = document.getElementById("container-result-btn-filter");
  const showArrBadgeIngredients = [];
  const showArrBadgeAppareils = [];
  const showArrBadgeUstensiles = [];
  const boxBadgesArr = [];
  const showArrBadge = [];

  recipes.forEach((item) => {
    const arrIngredients = item.ingredients;
    const ustensiles = item.ustensils;
    const appareils = item.appliance;

    // Remplie les ingredients
    for (const ing of arrIngredients){
      if (!sortArrayIngredients.includes(ing.ingredient.toLowerCase())) {
        sortArrayIngredients.push(ing.ingredient.toLowerCase());
      }
    }
    

    // Remplie les appareils
    if (!sortArrayAppareils.includes(item.appliance.toLowerCase())) {
      sortArrayAppareils.push(item.appliance.toLowerCase());
    }

    // Remplie les ustensiles
    for (const ust of ustensiles){
      if (!sortArrayUstensiles.includes(ust.toLowerCase())) {
        sortArrayUstensiles.push(ust.toLowerCase());
      }
    }
  });
  // Affichage de la data dans les boutons
  //Mise en place des Ingrédients
  const ulDropIngredients = document.getElementById("ul-btn-ingredients");
  for (const itemIng of sortArrayIngredients){
    const showIngredientsInBtn = `<li class="li-btn-ingredients">${itemIng}</li>`;
    ulDropIngredients.innerHTML += showIngredientsInBtn;
  }
  
  // Init btn ingredients
  const dropContentIngredients = document.querySelector(
    ".dropdown-content-ingredients"
  );
  const iconIngredients = document.getElementById("icon-ingredients");
  const inputIngredients = document.getElementById("myInputIngredients");
  const btnIngredients = document.getElementById("dropbtn1");

  btnIngredients.addEventListener("click", function () {
    dropContentIngredients.classList.toggle("show-content-ingredients");
    // https://stackoverflow.com/questions/36695438/detect-click-outside-div-using-javascript
    iconIngredients.classList.toggle("fa-chevron-up");
    btnIngredients.classList.toggle("btn-width");
    inputIngredients.classList.toggle("input-width");
  });

  // Recherche btn ingredient
  inputIngredients.addEventListener("input", () => {
    const showIngredientsFilter = [];
    const resultSearchIngredients = inputIngredients.value.toLowerCase();
    if (resultSearchIngredients.length >= 3) {
      ulDropIngredients.innerHTML = "";
      for (const itemIng of sortArrayIngredients){
        if (itemIng.includes(resultSearchIngredients)) {
          showIngredientsFilter.push(itemIng);
        }
      }
      for (const itemIng of showIngredientsFilter){
        ulDropIngredients.innerHTML += `<li class="li-btn-ingredients">${itemIng}</li>`;
      }
    } else {
      for (const itemIng of sortArrayIngredients){
        const showIngredientsInBtn = `<li class="li-btn-ingredients">${itemIng}</li>`;
        ulDropIngredients.innerHTML += showIngredientsInBtn;
      }
    }
  });

  // Eventlistener quand il appuit sur un ingredient
  const clicIngredient = document.querySelectorAll(".li-btn-ingredients");
  for (const itemIngBtn of clicIngredient){
    itemIngBtn.addEventListener("click", function () {
      if (!showArrBadge.length > 0) {
        showArrBadge.push({
          name: itemIngBtn.textContent,
          type: "ingredients",
        });
      } else {
        // On cherche si il y a un doublon.
        const result = showArrBadge.find(item => item.name === itemIngBtn.textContent)
        // Si pas de doublon, result est undefined, donc faux.
        if(!result) {
          showArrBadge.push({
            name: itemIngBtn.textContent,
            type: "ingredients",
          });
        }
        // console.log("Tableau", showArrBadge);
      }
      const el = document.createElement("span")
      el.innerHTML = ' ';
      for (const item of showArrBadge) {
        const badgeIngredient = item.name
        const ingType = item.type
          boxBadges.style.display = "flex";
          el.innerHTML = `${badgeIngredient}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`
          el.classList.add(`badge-${ingType}`)
          boxBadges.appendChild(el) 
      }
        el.addEventListener("click", () => {
            console.log('clique ok')
            boxBadges.removeChild(el)

          })
        
        btnSearchData(showArrBadge)
 
    });
  }

  // Init btn Appareils

  // Mise en place des appareils
  const ulDropAppareils = document.getElementById("ul-btn-appareils");
  for (const itemApp of sortArrayAppareils) {
    const showAppareilsInBtn = `<li class="li-btn-appareils">${itemApp}</li>`;
    ulDropAppareils.innerHTML += showAppareilsInBtn;
  }

  const dropContentAppareils = document.querySelector(
    ".dropdown-content-appareils"
  );
  const btnAppareils = document.getElementById("btnAppareil");
  const iconAppareils = document.getElementById("icon-appareils");
  const inputAppareils = document.getElementById("myInputAppareil");

  //BTN appareils
  btnAppareils.addEventListener("click", function () {
    dropContentAppareils.classList.toggle("show-content-appareils");
    iconAppareils.classList.toggle("fa-chevron-up");
    btnAppareils.classList.toggle("btn-width");
    inputAppareils.classList.toggle("input-width");
  });

  //Recherche des Appareils
  inputAppareils.addEventListener("input", () => {
    const showAppareilsFilter = [];
    const resultSearchAppareils = inputAppareils.value.toLowerCase();
    if (resultSearchAppareils.length >= 3) {
      ulDropAppareils.innerHTML = "";
      for (const itemApp of sortArrayAppareils) {
        if (itemApp.includes(resultSearchAppareils)) {
          showAppareilsFilter.push(itemApp);
        }
      }
      for (const itemApp of showAppareilsFilter) {
        ulDropAppareils.innerHTML += `<li class="li-btn-ingredients">${itemApp}</li>`;
      }
      
    } else {
      for (const itemApp of sortArrayAppareils) {
        const showAppareilsFilter = `<li class="li-btn-ingredients">${itemApp}</li>`;
        ulDropAppareils.innerHTML += showAppareilsFilter;
      }
    }
  });

  // Eventlistener quand il appuit sur un Appareil
  const clicAppareils = document.querySelectorAll(".li-btn-appareils");
  for (const itemAppBtn of clicAppareils) {
    itemAppBtn.addEventListener("click", function () {
      if(!showArrBadge.length > 0) {
        showArrBadge.push({
          name: itemAppBtn.textContent,
          type: "appareils"
        });
      } else {
        const result = showArrBadge.find(item => item.name === itemAppBtn.textContent)
        if(!result) {
          showArrBadge.push({
            name: itemAppBtn.textContent,
            type: "appareils",
          })
        }
      }
      const el = document.createElement("span")
      el.innerHTML = ' ';
      for (const item of showArrBadge) {
        const badgeAppareils = item.name
        const appType = item.type
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeAppareils}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`
        el.classList.add(`badge-${appType}`)
        boxBadges.appendChild(el)
      }
      el.addEventListener("click", () => {
        console.log('clique ok')
        boxBadges.removeChild(el)
        
      })
      btnSearchData(showArrBadge)
    });
  }


  //BTN Ustensiles
  // Mise en place des ustensiles
  const ulDropUstensiles = document.getElementById("ul-btn-ustensiles");
  for (const itemUst of sortArrayUstensiles) {
    const showUstensilesInBtn = `<li class="li-btn-ustensiles">${itemUst}</li>`;
    ulDropUstensiles.innerHTML += showUstensilesInBtn;
  }

  const btnUstensiles = document.getElementById("btn-ustensils");
  const dropContentUstensiles = document.getElementById("myDropdownUstensiles");
  const iconUstensiles = document.getElementById("icon-ustensils");
  const inputUstensiles = document.getElementById("myInputUstensiles");

  btnUstensiles.addEventListener("click", function () {
    dropContentUstensiles.classList.toggle("show-content-ustensiles");
    iconUstensiles.classList.toggle("fa-chevron-up");
    btnUstensiles.classList.toggle("btn-width");
    inputUstensiles.classList.toggle("input-width");
  });

  // Recherche des Ustensiles
  inputUstensiles.addEventListener("input", () => {
    const showUstensilesFilter = [];
    const resultSearchUstensiles = inputUstensiles.value.toLowerCase();
    if (resultSearchUstensiles.length >= 3) {
      ulDropUstensiles.innerHTML = "";
      for (const itemUst of sortArrayUstensiles){
        if (itemUst.includes(resultSearchUstensiles)) {
          showUstensilesFilter.push(itemUst);
        }
      }
      for (const itemUst of showUstensilesFilter) {
        ulDropUstensiles.innerHTML += `<li class="li-btn-ingredients">${itemUst}</li>`;
      }
    } else {
      for (const itemUst of sortArrayUstensiles) {
        const showUstensilesFilter = `<li class="li-btn-ingredients">${itemUst}</li>`;
        ulDropUstensiles.innerHTML += showUstensilesFilter;
      }
    }
  });

  // Eventlistener quand il appuit sur un Ustensiles
  const clicUstensiles = document.querySelectorAll(".li-btn-ustensiles");
  for (const itemUstBtn of clicUstensiles) {
    itemUstBtn.addEventListener("click", function () {
      if(!showArrBadge.lenght > 0) {
        showArrBadge.push({
          name : itemUstBtn.textContent,
          type : "ustensiles",
        });
      }else{
        const result = showArrBadge.find(item => item.name === itemUstBtn.textContent)
        if(!result){
          showArrBadge.push({
            name : itemUstBtn.textContent,
            type : "ustensiles",
          })
        }
      }
      const el = document.createElement("span")
      el.innerHTML = ' ';
      for (const item of showArrBadge) {
        const badgeUstensiles = item.name
        const ustType = item.type
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeUstensiles}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`
        el.classList.add(`badge-${ustType}`)
        boxBadges.appendChild(el)
      }

      el.addEventListener("click", () => {
        console.log('clique ok')
        boxBadges.removeChild(el)
      })
      btnSearchData(showArrBadge)
    });
  }



  function removeBadgeFilter() {
    const crossBadges = document.querySelector(".icon-cross-badge");
    console.log(crossBadges);
    for (const itemBadge of boxBadgesArr) {
      itemBadge.addEventListener("click", () => {
        boxBadgesArr.slice(itemBadge);
      });
    }
  }
  removeBadgeFilter();
};
