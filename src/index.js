// Creating a new workout and its atributes associated already
// http://127.0.0.1:3000/api/v1/workouts

const workout_url = "http://127.0.0.1:3000/api/v1/workouts"
const exercise_url = "http://127.0.0.1:3000/api/v1/exercise_attributes"

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
        workouts.data.forEach(w => {
            let workout = w.attributes
            let workoutId = w.id
            
            let newWorkout = new Workout(workoutId, workout)
            document.querySelector('#workout-container').insertAdjacentHTML('afterbegin', newWorkout.renderWorkout())

            workout.exercise_attributes.forEach(attr => {    
                let newAttribute = new ExerciseAttribute(attr)

                document.querySelector(`#workout-${workoutId}`).insertAdjacentHTML('beforeend', newAttribute.renderExercise() ) 
                 newAttribute.attachDeleteButtonListener()
                })
            })
        })
    }
    
    function postWorkout(title, date, category, calories, duration) {
        let bodyData = {title, date, category, calories, duration}
        fetch(workout_url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(wo => {
            let workout = wo.data.attributes
            let w = workout.exercise_attributes[workout.exercise_attributes.length - 1]
            let workoutId = w.workout_id
            
            let newWorkout = new Workout(workoutId, workout)
            document.querySelector('#workout-container').innerHTML +=  newWorkout.renderWorkout()

            let newAttribute = new ExerciseAttribute(w)
            document.querySelector(`#workout-${workoutId}`).innerHTML += newAttribute.renderExercise()  
             newAttribute.attachDeleteButtonListener()
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
    
    document.querySelector("#input-title").value = ""
    document.querySelector("#input-date").value = ""
    document.querySelector("#category").value = ""
    document.querySelector("#input-calories").value = ""
    document.querySelector("#input-duration").value = ""
}


