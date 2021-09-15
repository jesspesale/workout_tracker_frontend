const attr_url = "http://127.0.0.1:3000/api/v1/exercise_attributes"

document.addEventListener('DOMContentLoaded', () => {
    getExerciseAttributes()
    const newWorkoutForm = document.querySelector("#new-workout-form")

    newWorkoutForm.addEventListener("submit", (e) =>{
        createFormHandler(e)
    })
} )

function getExerciseAttributes() {
    fetch(attr_url)
    .then(response => response.json())
    .then(details => {
            //  console.log(details)
        details.data.forEach(detail => {
        const detailsSetUp = `<div data-id=${detail.id}>
            <h2>${detail.attributes.workout.title}</h2>
            <h3>Date: ${detail.attributes.date}</h3>
            <h3>Category: ${detail.attributes.category}</h3>
            <h4>Calories: ${detail.attributes.calories}</h4>
            <h4>Duration: ${detail.attributes.duration} (in minutes)</h4>
            <button data-id=${detail.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#attributes-container').innerHTML += detailsSetUp
      })
    })
}

function createFormHandler(e) {
    e.preventDefault()  // prevents the page from refreshing when submit is clicked      

    const titleInput = document.querySelector("#input-title").value
    const categoryChoice = document.querySelector("#category").value
    const calorieInput = document.querySelector("#input-calories").value
    const dateInput = document.querySelector("#input-date").value
    const durationInput = document.querySelector("#input-duration").value
    // const workoutId = 
    // workout ID??
    postWorkout(titleInput, categoryChoice, calorieInput, dateInput, durationInput)

}


function postWorkout(title, category, calories, date, duration) {
    // console.log(title, category, calories, date, duration)
    let bodyData = {title, category, calories, date, duration}
    fetch(attr_url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(workout => {
        console.log(workout)

        const newWorkout = `
            <div data-id=${workout.id}>
            <h2>${workout.title}</h2>
            <h3>Date: ${workout.date}</h3>
            <h3>Category: ${workout.category}</h3>
            <h4>Calories: ${workout.calories}</h4>
            <h4>Duration: ${workout.duration} (in minutes)</h4>
            <button data-id=${workout.id}>edit</button>
            </div>
        `
        document.querySelector('#attributes-container').innerHTML += newWorkout
        // can refactor ^ into a global variable since used more than once
       })
}