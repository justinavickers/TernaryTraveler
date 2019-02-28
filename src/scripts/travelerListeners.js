import API from "./api";
import renderInterests from "./displayInterest";

let travelerListeners = {

  addInterestListener: () => {
    const locationButton = document.getElementById("output")
    locationButton.addEventListener("click", (e) => {
      let saveInput = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value
      }
      if (e.target.id.startsWith("locationOfInterest")) {
        API.addInterest(saveInput)
          .then((e) => {
            API.getInterest(e).then(renderInterests)
          })
      }
    })
  },

  deleteInterest: () => {
    const deleteButton = document.getElementById("output")
    deleteButton.addEventListener("click", (e) => {
      if (e.target.id.startsWith("deleteInterest--")) {
        const interestId = event.target.id.split("--")[1]
        // var answer = window.confirm("Are you sure you want to delete this item?")
        if (confirm("Are you sure you want to delete this item?")) {
          alert("Yes");
          API.deleteInterest(interestId)
            .then((e) => {
              API.getInterest(e).then(renderInterests)
            })
        }
        else {
          alert("No");
        }
      }
    })
  }

}
export default travelerListeners