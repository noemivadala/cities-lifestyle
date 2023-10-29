import { getData } from "../app.js";
import { searchValue, containerListCity} from "../modules/variables.js";
export { previewCity };

function previewCity(result) {

    const content = result.slice(0, 4).map((city) => {
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

    getData(searchValue.value);
    containerListCity.classList.add('no-display'); 
}
  