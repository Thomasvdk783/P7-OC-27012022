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



  // Fonction qui sert à afficher les badges
  // const showBadgeList = (resultArrayBadge) => {
  //   const el = document.createElement("span");
  //   el.innerHTML = " ";
  //   console.log("resultArrayBadge", resultArrayBadge);
  //   resultArrayBadge.forEach((item) => {
  //     console.log("ITEMMMM", item);
  //     const badgeIngredient = item.name;
  //     const ingType = item.type;
  //     boxBadges.style.display = "flex";
  //     el.innerHTML = `${badgeIngredient}<img class="icon-cross-badge" src="../medias/cross.svg" alt="">`;
  //     el.classList.add(`badge-${ingType}`);
  //   });
  //   boxBadges.appendChild(el);
  // };

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
