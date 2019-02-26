
let travelerListeners = {

  addInterest: () => {
    const locationButton = document.getElementById("locationOfInterest")
    locationButton.addEventListener("click", (e) => {
       console.log("you clicked the interest button")
    })
  },

}
export default travelerListeners