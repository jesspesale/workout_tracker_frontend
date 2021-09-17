// Creating a new workout and its atributes associated already

const workout_url = "http://127.0.0.1:3000/api/v1/workouts"

document.addEventListener('DOMContentLoaded', () => {
    getWorkouts()
    const newWorkoutForm = document.querySelector("#new-workout-form")

    newWorkoutForm.addEventListener("submit", (e) =>{
        createFormHandler(e)
    })
} )

function getWorkouts() {
    fetch(workout_url)
    .then(response => response.json())
    .then(workouts => {
        // console.log(workouts)
        workouts.data.forEach(w => {
            let workout = w.attributes
            let workoutId = w.id
            // console.log(w)
            // console.log(workout)
            workout.exercise_attributes.forEach(attr => {
                
                // let attributes = attr
                render(workoutId, workout, attr )

            })

      })
    })
}

function render(workoutId, workout, attributes) {
        const postAttributes = ` <div data-id=${workoutId}>
        <h2>Title: ${workout.title}</h2>
        <h3>Date: ${workout.date}</h3>
        <h3>Category: ${attributes.category}</h3>
        <h4>Calories: ${attributes.calories}</h4>
        <h4>Duration: ${attributes.duration} (in minutes)</h4> 
        <button data-id=${workout.id}>Add another exercise</button>
        </div>
        <br><br>`

        document.querySelector('#workout-container').innerHTML +=  postAttributes
}

function postWorkout(title, date, category, calories, duration) {
    // console.log(title, date, category, calories, duration)
    let bodyData = {title, date, category, calories, duration}
    fetch(workout_url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(wo => {
        let workout = wo.data
        let workoutId = workout.id
        // console.log(workout)
        let w = workout.attributes.exercise_attributes[workout.attributes.exercise_attributes.length - 1]
        // debugger
        render(workoutId, workout.attributes, w)
        console.log(workout)

    })
}



function createFormHandler(e) {
    e.preventDefault()          // prevents the page from refreshing when submit is clicked      
    const titleInput = document.querySelector("#input-title").value
    const dateInput = document.querySelector("#input-date").value
    const categoryChoice = document.querySelector("#category").value
    const calorieInput = document.querySelector("#input-calories").value
    const durationInput = document.querySelector("#input-duration").value
    postWorkout(titleInput, dateInput, categoryChoice, calorieInput,  durationInput)
}


