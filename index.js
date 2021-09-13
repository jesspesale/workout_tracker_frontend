const attr_url = "http://127.0.0.1:3000/api/v1/exercise_attributes"

document.addEventListener('DOMContentLoaded', () => {
    getExerciseAttributes()
    const newWorkoutForm = document.querySelector("#exercise-attributes-form")

    newWorkoutForm.addEventListener("submit", (e) =>{
        createFormHandler(e)
    })
} )

function getExerciseAttributes() {
    fetch(attr_url)
    .then(response => response.json())
    .then(details => {
        let det = details
            console.log(details)
        details.data.forEach(detail => {
        const detailsSetUp = `<div data-id=${detail.id}>
            <h2>${detail.attributes.workout.title}</h2>
            <h3>Category: ${detail.attributes.category}</h3>
            <h4>Date: ${detail.attributes.date}</h4>
            <h4>Duration: ${detail.attributes.duration} (in minutes)</h4>
            <button data-id=${detail.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#detail-container').innerHTML += detailsSetUp
      })
    })
}

function createFormHandler(e) {
    e.preventDefault()  // prevents the page from refreshing when submit is clicked      
    // let event = e
    console.log(e)

    const titleInput = document.querySelector("#input-title").value
    const categoryChoice = document.querySelector("#category").value
    const dateInput = document.querySelector("#input-date").value
    const durationInput = document.querySelector("#input-duration").value

    
}


