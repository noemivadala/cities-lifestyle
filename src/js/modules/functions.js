import { getData } from "../app.js";
import { searchValue, containerListCity, iconClose, textError } from "./variables.js";
export { clearField, findCity, findCityEnter, createElement, createImage };

function createElement(tag, id, classe) {
    let element = document.createElement(tag);
    element.id = id;
    element.classList = classe;
    return element;
}

function createImage (tag, src, alt) {
    let element = document.createElement(tag);
    element.src = src;
    element.alt = alt;
    return element;
}

function clearField() {
    searchValue.value = "";
    iconClose.classList.add("close");
    searchValue.classList.remove('error');
    textError.style.display = 'none';
    containerListCity.classList.remove('display');
    containerListCity.classList.add('no-display');
    containerCard.classList.remove('display');
    containerCard.style.display = 'none';
}

function findCity() {
    let searchTerm = searchValue.value.trim();
    iconClose.classList.remove("close");
    console.log(searchTerm);
}

function findCityEnter(e) {

    if(e.key == "Enter") {
        containerCard.classList.remove('no-display');
        containerListCity.classList.add('no-display');
        getData();
        console.log('ho premuto invio');
    }
}