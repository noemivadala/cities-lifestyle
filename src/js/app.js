import '../sass/style.scss';
import axios from 'axios';
var _ = require('lodash');
import { containerCard, searchBtn, searchValue, textError, iconClose } from "./modules/variables.js";
import { clearField, findCity, findCityEnter} from "./modules/functions.js";
import { previewCity} from "./modules/autocomplete.js";
import { cardCity } from "./component/card.js";


let urlCity = "https://api.teleport.org/api/urban_areas/slug:";
let urlListCities = "https://api.teleport.org/api/urban_areas/";

//call
async function getData(searchTerm) {
  searchTerm = searchValue.value.toLowerCase().replace(' ', '-');
  containerListCity.classList.remove('display');
  containerListCity.classList.add('no-display');

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
        containerListCity.classList.add('no-display');
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
  let input = searchValue.value.toLowerCase();

  console.log(input);
  if(input.length){
    result = cities.filter((city) => {
      if (city.name && typeof city.name === 'string') {
        return city.name.toLowerCase().startsWith(input.toLowerCase());
      }
      return false;
    });
    
    searchValue.classList.remove('error');
    textError.style.display = 'none';
    containerListCity.classList.remove("no-display");
    containerCard.classList.remove("display");
    containerCard.classList.add("no-display");
    iconClose.classList.remove("no-display");
  } else if(input.trim() === '' ) {

    containerListCity.classList.add("no-display");
    containerCard.classList.add("no-display");
    iconClose.classList.add("no-display");
    console.log("stringa vuota");
  }
  previewCity(result);
}

//event button
searchBtn.addEventListener('click', getData);
iconClose.addEventListener('click', clearField);
searchValue.addEventListener('keyup', findCity);
searchValue.addEventListener('keydown', findCityEnter);
searchValue.addEventListener('click', getListCity);


export { getData };