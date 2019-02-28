import API from "./api";
import interestFormInput from "./interestForm";
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
      //  console.log(addInterestListener)
      API.addInterest(saveInput)
      .then((e) => {
        API.getInterest(e).then(renderInterests)})
     }
    })
  },

  // deleteInterest: () => {
  //   const deleteButton = document.getElementById("output")
  //   deleteButton.addEventListener("click", (e) => {
  //     if(e.target.id.startsWith("deleteInterest--")) {
  //       const interestId = event.target.id.split("--")[1]
  //       API.deleteInterest(interestId)
  //     }
  //   })
  // }

}
export default travelerListeners