import makePointOfInterest from "./interestComponent";

const article = document.querySelector(".output");

function renderAllInterest(interest) {
  journalEntries.forEach(interest => {
    article.innerHTML += makePointOfInterest(interest);
  });
}

export default renderAllInterest