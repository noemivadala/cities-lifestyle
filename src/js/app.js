import '../sass/style.scss';
import axios from 'axios';
import { containerCard, search, searchValue, textError, iconClose } from "./modules/variables.js";
import { clearField, findCity, findCityEnter } from "./modules/functions.js";
import { cardCity } from "./component/card.js";

let urlCity = "https://api.teleport.org/api/urban_areas/slug:";

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

//event button
search.addEventListener("click", getData);
iconClose.addEventListener("click", clearField);
searchValue.addEventListener("keyup", findCity);
searchValue.addEventListener("keydown", findCityEnter);

export { getData };