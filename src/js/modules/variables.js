export { sectionSearch, containerListCity, containerCard, containerScore, searchBtn, searchLabel, searchValue, textError, iconClose };

const sectionSearch = document.getElementById("sectionSearch");
const searchBtn = document.getElementById("searchBtn");
const searchLabel = document.getElementById("searchLabel");
const searchValue = document.getElementById("searchValue");
const textError = document.getElementById("textError");
const iconClose = document.getElementById("iconClose");
const containerListCity = document.getElementById('containerListCity');
const containerCard = document.getElementById("containerCard");
const containerScore = document.getElementById("containerScore");


sectionSearch.appendChild(containerListCity);

containerListCity.classList.add('no-display');
containerCard.classList.add('no-display');
containerScore.classList.add('no-display');