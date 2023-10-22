import { BluCarDiv, BluCarImg, containerCars } from "../component/cars.js";
import { PurpleCarDiv, PurpleCarImg } from "../component/cars.js";
import { RedCarDiv, RedCarImg } from "../component/cars.js";
import { YellowCarDiv, YellowCarImg } from "../component/cars.js";

//title - search
gsap.from('#title', 1, {
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1.5,
    stagger: {
      amount: 0.3,
    }
  })
  
  gsap.from('#search', 1, {
    y: 60,
    opacity: 0,
    ease: "power3.out",
    delay: 1.5,
    stagger: {
      amount: 0.3,
    }
})

//car
const tl = gsap.timeline( { repeat: -1 } );
tl.fromTo(
  BluCarImg, 
  { x: "300vh" }, { x: "-180vh", duration: 8 });
tl.fromTo(
  PurpleCarImg,
  { x: "-50vh" },{ x: "300vh", duration: 10, ease:"none"}, "<"
);
tl.fromTo(
  RedCarImg,
  { x: "-150vh" },{ x: "300vh", duration: 12, ease:"none", delay: 4}, "<"
)
tl.fromTo(
  YellowCarImg,
  { x: "-150vh" },{ x: "300vh", duration: 14, ease:"none", delay: 6}, "<"
)

//media query
let mm = gsap.matchMedia();
mm.add("(max-width: 800px)", () => {

  tl.fromTo(
    BluCarImg, 
    { y: "200vh" }, { y: "-160vh", duration: 8 });

;
});