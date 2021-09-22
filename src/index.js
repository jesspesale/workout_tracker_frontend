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
            
            let newWorkout = new Workout(workoutId, workout)
            document.querySelector('#workout-container').innerHTML +=  newWorkout.renderWorkout()

            workout.exercise_attributes.forEach(attr => {    
                // new ExerciseAttribute(attr)
                // let att = attr
                let newAttribute = new ExerciseAttribute(attr)
                // debugger
                // renderAttributes(workoutId, attr)
                document.querySelector(`#workout-${workoutId}`).innerHTML += newAttribute.renderExercise() 
                // debugger
            })
        })
    })
    // .catch(err => console.log(err))
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
        let workout = wo.data.attributes
        let w = workout.exercise_attributes[workout.exercise_attributes.length - 1]
        let workoutId = w.workout_id

        let newWorkout = new Workout(workoutId, workout)
        document.querySelector('#workout-container').innerHTML +=  newWorkout.renderWorkout()
        // debugger
        let newAttribute = new ExerciseAttribute(w)
        document.querySelector(`#workout-${workoutId}`).innerHTML += newAttribute.renderExercise()  
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


