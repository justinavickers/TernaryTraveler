import interestForm from "./interestComponent";

const API = {
  getInterest(){
   return fetch("http://localhost:3000/interests")
    .then(interest => interest.json())
    .then( document.getElementById("output").innerHTML = interestForm)
  },

  addInterest(interests) {
    return fetch("http://localhost:3000/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interests)
    })
  },
  deleteInterest(id) {
    return fetch(`http://localhost:3000/interests/${id}`, {
      method:"DELETE"
    })
  }

}
export default API