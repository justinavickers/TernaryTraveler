import interestFormInput from "./interestForm";

const article = document.querySelector("#output");

function renderInterests(interests) {
  interests.forEach(interest => {
    article.innerHTML += interestFormInput(interest);
  });
}

export default renderInterests