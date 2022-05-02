import { btnSearchData } from "../btnSearchData.js";
import { fullBtn } from "./fullBtn.js";

// BTN ingredients

// console.log('BTN ingrédients')

export const btn = async (data) => {
  const recipes = data;
  let sortArrayIngredients = [];
  let sortArrayUstensiles = [];
  let sortArrayAppareils = [];
  const showCardResult = [];

  // Init constantes Badge
  const boxBadges = document.getElementById("container-result-btn-filter");
  const showArrBadgeIngredients = [];
  const showArrBadgeAppareils = [];
  const showArrBadgeUstensiles = [];
  const boxBadgesArr = [];
  const showArrBadge = [];

  const response = await fullBtn(recipes);
  console.log(response);
  sortArrayIngredients = response.sortArrayIngredients;
  sortArrayUstensiles = response.sortArrayUstensiles;
  sortArrayAppareils = response.sortArrayAppareils;

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
  // inputIngredients.addEventListener("input", () => {
  //   // let sortArrayIngredients = [];
  //   const showIngredientsFilter = [];
  //   const resultSearchIngredients = inputIngredients.value.toLowerCase();
  //   if(resultSearchIngredients.lenght >= 3){
  //     console.log(sortArrayIngredients)
  //   }
  // })

  inputIngredients.addEventListener("input", () => {
    const ulDropIngredients = document.getElementById("ul-btn-ingredients");
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
      // Fonction qui sert à remplir le tableau des badges
      fullArrayBadge(itemIngBtn);
      // Fonction qui sert à afficher les badges
      showBadgeList(showArrBadge);

      console.log("Apres la boucle", showArrBadge);

      // el.addEventListener("click", () => {
      //     boxBadges.removeChild(el)
      // })

      // btnSearchData(showArrBadge)

      // ----------------------------------------------------
      // Parcourir le tableau ShowArrBadge
      // Afficher les badges sur le site
      // Ex: `<li class="li-btn-${TYPE}">${NAME}</li>`

      // Faire pareil pour Appareil et Ustensiles
      // -----------------------------------------------------
    });
  });

  // Fonction qui sert à remplir le tableau des badges
  const fullArrayBadge = (itemIngBtn) => {
    if (!showArrBadge.length > 0) {
      showArrBadge.push({
        name: itemIngBtn.textContent,
        type: "ingredients",
      });
    } else {
      // On cherche si il y a un doublon.
      const result = showArrBadge.find((item) => {
        console.log("dsqds", item.name, itemIngBtn.textContent);
        return item.name === itemIngBtn.textContent;
      });
      console.log("result", result);
      // Si pas de doublon, result est undefined, donc faux.
      if (result === undefined) {
        console.log("JE SUIS PAS UN DOUBLON", itemIngBtn.textContent);
        showArrBadge.push({
          name: itemIngBtn.textContent,
          type: "ingredients",
        });
      } else {
        console.log("JE SUIS UN DOUBLON");
      }
    }

    console.log("showArrBadge", showArrBadge);
  };

  // Fonction qui sert à afficher les badges
  const showBadgeList = (resultArrayBadge) => {
    const el = document.createElement("span");
    el.innerHTML = " ";
    console.log("resultArrayBadge", resultArrayBadge);
    resultArrayBadge.forEach((item) => {
      console.log("ITEMMMM", item);
      const badgeIngredient = item.name;
      const ingType = item.type;
      boxBadges.style.display = "flex";
      el.innerHTML = `${badgeIngredient}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`;
      el.classList.add(`badge-${ingType}`);
    });
    boxBadges.appendChild(el);
  };

  // Init btn Appareils ////////////////////////

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
        const AppareilsInBtn = `<li class="li-btn-ingredients">${itemApp}</li>`;
        ulDropAppareils.innerHTML += AppareilsInBtn;
      });
    }
  });

  // Eventlistener quand il appuit sur un Appareil
  const clicAppareils = document.querySelectorAll(".li-btn-appareils");
  clicAppareils.forEach((itemAppBtn) => {
    itemAppBtn.addEventListener("click", function () {
      if (!showArrBadge.length > 0) {
        showArrBadge.push({
          name: itemAppBtn.textContent,
          type: "appareils",
        });
      } else {
        const result = showArrBadge.find(
          (item) => item.name === itemAppBtn.textContent
        );
        if (!result) {
          showArrBadge.push({
            name: itemAppBtn.textContent,
            type: "appareils",
          });
        }
      }
      const el = document.createElement("span");
      showArrBadge.forEach((item) => {
        el.innerHTML = " ";
        const badgeAppareils = item.name;
        const appType = item.type;
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeAppareils}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`;
        el.classList.add(`badge-${appType}`);
        boxBadges.appendChild(el);
      });
      el.addEventListener("click", () => {
        console.log("clique ok");
        boxBadges.removeChild(el);
      });
      btnSearchData(showArrBadge);
    });
  });

  //BTN Ustensiles

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
      if (!showArrBadge.lenght > 0) {
        showArrBadge.push({
          name: itemUstBtn.textContent,
          type: "ustensiles",
        });
      } else {
        const result = showArrBadge.find(
          (item) => item.name === itemUstBtn.textContent
        );
        if (!result) {
          showArrBadge.push({
            name: itemUstBtn.textContent,
            type: "ustensiles",
          });
        }
      }
      const el = document.createElement("span");
      showArrBadge.forEach((item) => {
        el.innerHTML = " ";
        const badgeUstensiles = item.name;
        const ustType = item.type;
        boxBadges.style.display = "flex";
        el.innerHTML = `${badgeUstensiles}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`;
        el.classList.add(`badge-${ustType}`);
        boxBadges.appendChild(el);
      });
      el.addEventListener("click", () => {
        console.log("clique ok");
        boxBadges.removeChild(el);
      });
      console.log(showArrBadge);
      btnSearchData(showArrBadge);

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
    boxBadgesArr.forEach((itemBadge) => {
      itemBadge.addEventListener("click", () => {
        boxBadgesArr.slice(itemBadge);
      });
    });
  }
  removeBadgeFilter();
};
