const API = {
  getInterest() {
    return fetch("http://localhost:3000/interests")
    .then(response => response.json())
    .then(console.log(response))
  },

  saveInterestEntry(interests) {
    return fetch("http://localhost:3000/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pointOfInterest)
    })
  }
}

export default API