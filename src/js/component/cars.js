import BluCarSrc from '../../img/car/blue-car.png';
import PurpleCarSrc from '../../img/car/purple-car.png';
import RedCarSrc from '../../img/car/red-car.png';
import YellowCarSrc from '../../img/car/yellow-car.png';
import { createElement, createImage } from "../modules/functions.js";

//create div cars
let BluCarDiv = createElement('div', 'bluCar', 'blue-car');
let PurpleCarDiv = createElement('div', 'purpleCar', 'purple-car');
let RedCarDiv = createElement('div', 'redCar', 'red-car');
let YellowCarDiv = createElement('div', 'yellowCar', 'yellow-car');

//create img cars
let BluCarImg = createImage ('img', BluCarSrc, 'Macchina Blu');
let PurpleCarImg = createImage ('img', PurpleCarSrc, 'Macchina Viola');
let RedCarImg = createImage ('img', RedCarSrc, 'Macchina Rossa');
let YellowCarImg = createImage ('img', YellowCarSrc, 'Macchina Gialla');

YellowCarDiv.appendChild(YellowCarImg);
RedCarDiv.appendChild(RedCarImg);
PurpleCarDiv.appendChild(PurpleCarImg);
BluCarDiv.appendChild(BluCarImg);

let containerCars = document.getElementById("continerCars");
containerCars.append(BluCarDiv, PurpleCarDiv, RedCarDiv, YellowCarDiv);

export { BluCarDiv, BluCarImg, containerCars };
export { PurpleCarDiv, PurpleCarImg };
export { RedCarDiv, RedCarImg };
export { YellowCarDiv, YellowCarImg };

