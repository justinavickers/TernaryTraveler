import makePointOfInterest from "./interestComponent";

const article = document.querySelector(".output");

function renderAllInterest(interest) {
  interest.forEach(interest => {
    article.innerHTML += makePointOfInterest(interest);
  });
}

export default renderAllInterest