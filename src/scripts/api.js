import interestForm from "./interestComponent";

const APIfunctions = {
  getInterest(){
   return fetch("http://localhost:3000/interests")
    .then(interest => interest.json())
    .then( document.getElementById("output").innerHTML = interestForm)
  },

  addInterest(interests) {
    return fetch("http://localhost:3000/interest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interests)
    })
  }

}
export default APIfunctions