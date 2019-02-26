import API from "./api"
import interestFormInput from "./interestForm";

let interestToDOM = () => {
  const interestItems = document.getElementById("output")
  interestItems.innerHTML = ""
  interestItems.innerHTML += interestToDOM
  API.getInterest()
    .then(parsedInterests => {
      console.log(parsedInterests)
      })
    }
export default interestToDOM