
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

    arrIngredients.forEach((ing) => {
      if (!sortArrayIngredients.includes(ing.ingredient.toLowerCase())) {
        sortArrayIngredients.push(ing.ingredient.toLowerCase());
      }
    });

    // Remplie les appareil
    if (!sortArrayAppareils.includes(item.appliance.toLowerCase())) {
      sortArrayAppareils.push(item.appliance.toLowerCase());
    }

    // Remplie les ustensiles
    ustensiles.forEach((ust) => {
      if (!sortArrayUstensiles.includes(ust.toLowerCase())) {
        sortArrayUstensiles.push(ust.toLowerCase());
      }
    });
  });
  // Affichage de la data dans les boutons
  //Mise en place des Ingrédients
  const ulDropIngredients = document.getElementById("ul-btn-ingredients");
  sortArrayIngredients.forEach((itemIng) => {
    const showIngredientsInBtn = `<li class="li-btn-ingredients">${itemIng}</li>`;
    ulDropIngredients.innerHTML += showIngredientsInBtn;
  });
  
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
    ulDropIngredients.innerHTML = "";
    if (resultSearchIngredients.length >= 3) {
      sortArrayIngredients.forEach((itemIng) => {
        if (itemIng.includes(resultSearchIngredients)) {
          showIngredientsFilter.push(itemIng);
        }
      });
      showIngredientsFilter.forEach((itemIng) => {
        ulDropIngredients.innerHTML += `<li class="li-btn-ingredients">${itemIng}</li>`;
      });
    } else {
      sortArrayIngredients.forEach((itemIng) => {
        const showIngredientsInBtn = `<li class="li-btn-ingredients">${itemIng}</li>`;
        ulDropIngredients.innerHTML += showIngredientsInBtn;
      });
    }
  });

  // Eventlistener quand il appuit sur un ingredient
  const clicIngredient = document.querySelectorAll(".li-btn-ingredients");
  clicIngredient.forEach((itemIngBtn) => {
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
      showArrBadge.forEach((item) => {
        el.innerHTML = ' ';
        const badgeIngredient = item.name
        const ingType = item.type
          boxBadges.style.display = "flex";
          el.innerHTML = `${badgeIngredient}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`
          el.classList.add(`badge-${ingType}`)
          boxBadges.appendChild(el) 
          
        })
        el.addEventListener("click", () => {
            console.log('clique ok')
            boxBadges.removeChild(el)

          })
        
        btnSearchData(showArrBadge)
 
        



      // ----------------------------------------------------
      // Parcourir le tableau ShowArrBadge
      // Afficher les badges sur le site 
          // Ex: `<li class="li-btn-${TYPE}">${NAME}</li>`

      // Faire pareil pour Appareil et Ustensiles
      // -----------------------------------------------------

    });
  });

  // Init btn Appareils

  // Mise en place des appareils
  const ulDropAppareils = document.getElementById("ul-btn-appareils");
  sortArrayAppareils.forEach((itemApp) => {
    const showAppareilsInBtn = `<li class="li-btn-appareils">${itemApp}</li>`;
    ulDropAppareils.innerHTML += showAppareilsInBtn;
  });

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
    ulDropAppareils.innerHTML = "";
    if (resultSearchAppareils.length >= 3) {
      sortArrayAppareils.forEach((itemApp) => {
        if (itemApp.includes(resultSearchAppareils)) {
          showAppareilsFilter.push(itemApp);
        }
      });
      showAppareilsFilter.forEach((itemApp) => {
        ulDropAppareils.innerHTML += `<li class="li-btn-ingredients">${itemApp}</li>`;
      });
    } else {
      sortArrayAppareils.forEach((itemApp) => {
        const AppareilsInBtn  = `<li class="li-btn-ingredients">${itemApp}</li>`;
        ulDropAppareils.innerHTML += AppareilsInBtn;
      });
    }
  });

  // Eventlistener quand il appuit sur un Appareil
  const clicAppareils = document.querySelectorAll(".li-btn-appareils");
  clicAppareils.forEach((itemAppBtn) => {
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
      showArrBadge.forEach((item) => {
        el.innerHTML = ' ';
        const badgeAppareils = item.name
        const appType = item.type
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeAppareils}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`
        el.classList.add(`badge-${appType}`)
        boxBadges.appendChild(el)
      })
      el.addEventListener("click", () => {
        console.log('clique ok')
        boxBadges.removeChild(el)
        
      })
      btnSearchData(showArrBadge)
    });
  });

  //BTN Ustensiles
  // Mise en place des ustensiles
  const ulDropUstensiles = document.getElementById("ul-btn-ustensiles");
  sortArrayUstensiles.forEach((itemUst) => {
    const showUstensilesInBtn = `<li class="li-btn-ustensiles">${itemUst}</li>`;
    ulDropUstensiles.innerHTML += showUstensilesInBtn;
  });

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
      sortArrayUstensiles.forEach((itemUst) => {
        if (itemUst.includes(resultSearchUstensiles)) {
          showUstensilesFilter.push(itemUst);
        }
      });
      showUstensilesFilter.forEach((itemUst) => {
        ulDropUstensiles.innerHTML += `<li class="li-btn-ingredients">${itemUst}</li>`;
      });
    } else {
      sortArrayUstensiles.forEach((itemUst) => {
        const showUstensilesFilter = `<li class="li-btn-ingredients">${itemUst}</li>`;
        ulDropUstensiles.innerHTML += showUstensilesFilter;
      });
    }
  });

  // Eventlistener quand il appuit sur un Ustensiles
  const clicUstensiles = document.querySelectorAll(".li-btn-ustensiles");
  clicUstensiles.forEach((itemUstBtn) => {
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
      showArrBadge.forEach((item) => {
        el.innerHTML = ' ';
        const badgeUstensiles = item.name
        const ustType = item.type
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeUstensiles}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`
        el.classList.add(`badge-${ustType}`)
        boxBadges.appendChild(el)
      })
      el.addEventListener("click", () => {
        console.log('clique ok')
        boxBadges.removeChild(el)
      })
      console.log(showArrBadge)
      btnSearchData(showArrBadge)
      
      // const badgeUstensiles = `<span class="badge-ustensiles">${itemUstBtn.textContent}<img class="icon-cross-badge" src="../medias/cross.svg" alt=""></span>`;
      // console.log(badgeUstensiles);
      // boxBadges.style.display = "flex";
      // showArrBadgeUstensiles.push(badgeUstensiles);
      // boxBadgesArr.push(showArrBadgeUstensiles);
      // boxBadges.innerHTML = boxBadgesArr;
    });
  });

  function removeBadgeFilter() {
    const crossBadges = document.querySelector(".icon-cross-badge");
    console.log(crossBadges);
    boxBadgesArr.forEach((itemBadge) => {
      itemBadge.addEventListener("click", () => {
        boxBadgesArr.slice(itemBadge);
      });
    });
  }
  removeBadgeFilter();
};
