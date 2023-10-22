import { containerCard, containerScore, searchValue, textError } from "../modules/variables.js";
export { cardCity };

const cardCity = function (data) {
    //clear
    containerScore.innerHTML = ` `;
    textError.style.display = 'none';
    searchValue.classList.remove('error');
    containerCard.classList.add("display");
  
    let description = data.summary;
    let categories = data.categories;
    console.log(data.categories);
    
    containerCard.innerHTML = `
      <div class="container-info text-center">
        <h3 class="title-description mb-3">
          Description
        </h3>
        <p>
          ${description}
        <p>
        </dl>
      </div>`;
  
    containerCard.append(containerScore);
  
    categories.forEach(category => {
      const el = document.createElement('div');
      let categoryName = category.name;
      let categoryValue = category.score_out_of_10.toFixed(2);
      el.innerHTML = `${categoryName}<br> ${categoryValue}`;
      containerScore.append(el);
    })
  
  
  gsap.from('#containerCard', 1, {
    opacity: 0,
    height: 0,
    ease: "power3.inOut",
  })
};