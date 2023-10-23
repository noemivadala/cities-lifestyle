import '../sass/style.scss';
import axios from 'axios';
var _ = require('lodash');
import { sectionSearch, containerCard, search, searchLabel, searchValue, textError, iconClose } from "./modules/variables.js";
import { clearField, findCity, findCityEnter, createElement } from "./modules/functions.js";
import { cardCity } from "./component/card.js";

let containerListCity = createElement('div', 'containerListCity', 'list-city');
sectionSearch.appendChild(containerListCity);

let urlCity = "https://api.teleport.org/api/urban_areas/slug:";
let urlListCities = "https://api.teleport.org/api/urban_areas/";

//call
async function getData(searchTerm) {
  searchTerm = searchValue.value.toLowerCase().replace(' ', '-');
  axios
    .get(urlCity + searchTerm + "/scores/")
    .then((response) => {
      const data = response.data;
      return data;
    })
    .then(cardCity)
    .catch((error) => {
      if (error.response.status === 404){
        searchValue.classList.remove('ring-gray-300');
        searchValue.classList.add('error');
        textError.style.display = 'block';
        textError.innerText = `City not found`;
        containerCard.classList.remove("display");
      }
      console.log("Error: ", error.response.status);
      console.log(urlCity + searchTerm + "/scores/");
    });
}

let cities = [];

async function getListCity() {
  try {
    const response = await axios.get(urlListCities);
    cities = _.get(response, "data._links.ua:item", []);

    cities.forEach(city => {
      const name = city.name;
    });

  } catch (error) {
    console.log(error);
  }
}

searchValue.onkeyup = function() {
  let result = [];
  let input = searchValue.value;
  console.log(input);
  if(input.length){
    result = cities.filter((city) => {
      if (city.name && typeof city.name === 'string') {
        return city.name.toLowerCase().includes(input);
      }
      return false;
    });
  }
  previewCity(result);
}

function previewCity(result) {
  containerListCity.style.display = "block"; 
  const content = result.map((city) => {
    const listItem = document.createElement('li');
    listItem.classList.add("list-item");
    listItem.textContent = city.name;
    console.log(city);
    listItem.addEventListener('click', () => selectInput(city));
    return listItem;
  });

  const ul = document.createElement('ul');
  ul.append(...content);

  containerListCity.innerHTML = '';
  containerListCity.appendChild(ul);
}

function selectInput(city) {
  searchValue.value = city.name;
  containerListCity.innerHTML = '';
  getData(searchValue.value);
  containerListCity.style.display = "none"; 
}


//event button
search.addEventListener('click', getData);
iconClose.addEventListener('click', clearField);
searchValue.addEventListener('keyup', findCity);
searchValue.addEventListener('keydown', findCityEnter);
searchValue.addEventListener('click', getListCity);


export { getData };