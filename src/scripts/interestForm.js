const interestFormInput = (interests) =>{
  return `
  <div class="interestCard">
  <h3>${interests.name}</h3>
  <h3>${interests.description}</h3>
  <button id="deleteInterest--${interests.id}">Delete</button>
  </div>
  `
}

export default interestFormInput

