import interestToDOM from "./interestsToDOM"
import API from "./api"
import interestForm from "./interestComponent";
import travelerListeners from "./travelerListeners";
API.getInterest(interestToDOM)
interestToDOM(interestForm)
travelerListeners.addInterestListener()
travelerListeners.deleteInterest()


