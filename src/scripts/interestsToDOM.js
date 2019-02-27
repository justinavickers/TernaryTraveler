import API from "./api"
import renderInterests from "./displayInterest";

let interestToDOM = () => {
  const interestItems = document.getElementById("output")
  interestItems.innerHTML = ""
  interestItems.innerHTML += interestToDOM
  API.getInterest()
    .then(parsedInterests =>  renderInterests(parsedInterests))
      console.log(parsedInterests)
}

export default interestToDOM