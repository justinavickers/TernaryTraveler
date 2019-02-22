import API from "./api";
import renderAllInterests from "./data"

function getAllInterests() {
  API.getInterests()
  .then(interests => renderAllInterests(interests))
}
getAllInterests()

const recordInterest = document.getElementById("locationOfInterest")
recordInterest.addEventListener("click", (e) => {
  API.saveInterestEntry()
  .then( ()=> {getAllInterests()} )
})

