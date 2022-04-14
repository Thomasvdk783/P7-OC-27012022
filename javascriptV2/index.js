import {initData} from '../../javascriptV2/initData.js';
import {userSearchData} from '../../javascriptV2/userSearchData.js';



// On appelle la function au chargement de la page
initData();
// On écoute l'événement de l'utilisteur sur l'input. On appelle la function userSearchData avec la valeur de l'input en paramêtre.
const searchBar = document.getElementById("searchbar");
searchBar.addEventListener("keyup", userSearchData);

