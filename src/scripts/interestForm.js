const interestFormInput = (interests) =>{
  return `
  <div class="interestCard">
  <h3>${interests.name}</h3>
  <h3>${interests.description}</h3>
  <h3>${interests.placeId}</h3>
  </div>
  `
}

export default interestFormInput

