import API from "./api";
import interestFormInput from "./interestForm";
import renderInterests from "./displayInterest";

let travelerListeners = {

  addInterestListener: () => {
    const locationButton = document.getElementById("output")
    locationButton.addEventListener("click", (e) => {
     if (e.target.id.startsWith("locationOfInterest")) {
       console.log(addInterest)
      API.addInterest(interestFormInput)
      .then(() => {
        API.getInterest(renderInterests)})
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