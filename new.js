

// Creating a new exercise attribute that is associated with a new workout

// const attr_url = "http://127.0.0.1:3000/api/v1/exercise_attributes"

// document.addEventListener('DOMContentLoaded', () => {
//     getExerciseAttributes()
//     const newWorkoutForm = document.querySelector("#new-workout-form")

//     newWorkoutForm.addEventListener("submit", (e) =>{
//         createFormHandler(e)
//     })
// } )

// function getExerciseAttributes() {
//     fetch(attr_url)
//     .then(response => response.json())
//     .then(details => {
//             //  console.log(details)
//         details.data.forEach(detail => {
//         const detailsSetUp = `<div data-id=${detail.id}>
//             <h2>${detail.attributes.workout.title}</h2>
//             <h3>Date: ${detail.attributes.date}</h3>
//             <h3>Category: ${detail.attributes.category}</h3>
//             <h4>Calories: ${detail.attributes.calories}</h4>
//             <h4>Duration: ${detail.attributes.duration} (in minutes)</h4>
//             <button data-id=${detail.id}>edit</button>
//           </div>
//           <br><br>`;

//           document.querySelector('#attributes-container').innerHTML += detailsSetUp
//       })
//     })
// }

// function createFormHandler(e) {
//     e.preventDefault()  // prevents the page from refreshing when submit is clicked      
//     // let even = e
//     // console.log(e)
//     // debugger
//     const titleInput = document.querySelector("#input-title").value
//     const categoryChoice = document.querySelector("#category").value
//     const calorieInput = document.querySelector("#input-calories").value
//     const dateInput = document.querySelector("#input-date").value
//     const durationInput = document.querySelector("#input-duration").value
//     // const workoutId = 
//     // workout ID??
//     postWorkout(titleInput, categoryChoice, calorieInput, dateInput, durationInput)

// }


// function postWorkout(title, category, calories, date, duration) {
//     console.log(title, category, calories, date, duration)
//     let bodyData = {title, category, calories, date, duration}
//     fetch(attr_url, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(bodyData)
//         // JSON.stringify({        
//         //     title: title,
//         //     category: category,
//         //     date: date,
//         //     duration: duration
//         // }  )   
//     })
//     .then(response => response.json())
//     .then(workout => {
//         console.log(workout)
//         // debugger
//         const newWorkout = `
//             <div data-id=${workout.id}>
//             <h2>${workout.title}</h2>
//             <h3>Date: ${workout.date}</h3>
//             <h3>Category: ${workout.category}</h3>
//             <h4>Calories: ${workout.calories}</h4>
//             <h4>Duration: ${workout.duration} (in minutes)</h4>
//             <button data-id=${workout.id}>edit</button>
//             </div>
//         `
//         document.querySelector('#attributes-container').innerHTML += newWorkout
//         // can refactor ^ into a global variable since used more than once
//     })
// }



// // Creating a new workout, then after appending to DOM adding attributes


// const workout_url = "http://127.0.0.1:3000/api/v1/workouts"


// document.addEventListener('DOMContentLoaded', () => {
//     getWorkouts()
//     const newWorkoutForm = document.querySelector("#new-workout-form")

//     newWorkoutForm.addEventListener("submit", (e) =>{
//         createFormHandler(e)
//     })
// } )

// function getWorkouts() {
//     fetch(workout_url)
//     .then(response => response.json())
//     .then(workouts => {
//         //  console.log(workouts)
//         workouts.data.forEach(w => {
//             let workout = w.attributes
//             // console.log(workout)
//             //   debugger
//             workout.exercise_attributes.forEach(attr => {
//                 let attributes = attr
//                  const postAttributes = ` <div data-id=${w.id}>
//                  <h2>Title: ${workout.title}</h2>
//                 <h3>Date: ${attributes.date}</h3>
//                 <h3>Category: ${attributes.category}</h3>
//                 <h4>Calories: ${attributes.calories}</h4>
//                 <h4>Duration: ${attributes.duration} (in minutes)</h4> 
//                 <button data-id=${workout.id}>edit</button>
//                 </div>
//                 <br><br>`
//                  document.querySelector('#workout-container').innerHTML += postAttributes
//             })
//             // let workoutContainer = document.querySelector('#workout-container')
//             // document.querySelector('#workout-container').innerHTML += postWorkouts
//       })
//     })
// }

// function createFormHandler(e) {
//     e.preventDefault()          // prevents the page from refreshing when submit is clicked      
//     const titleInput = document.querySelector("#input-title").value
//     // const categoryChoice = document.querySelector("#category").value
//     // const calorieInput = document.querySelector("#input-calories").value
//     // const dateInput = document.querySelector("#input-date").value
//     // const durationInput = document.querySelector("#input-duration").value
//     postWorkout(titleInput)
// }

// function postWorkout(title) {
//     console.log(title)
//     let bodyData = {title}
//     fetch(workout_url, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             title: title
//         })
//     })
//     .then(response => response.json())
//     .then(workout => {
//         let w = workout
//         console.log(w)
//         //  debugger
//          const newWorkout = `<div data-id=${workout.data.id}>
//          <h2>Title: ${workout.data.attributes.title}</h2>
//         <button data-id=${workout.data.id}>Add Attributes</button>
//          </div>`

//         const workoutContainer = document.querySelector('#new-workout-container')
//         // workoutContainer.insertBefore(newWorkout, workoutContainer.firstChild)
//         workoutContainer.innerHTML += newWorkout
//         // document.querySelector('#attributes-container').innerHTML += newWorkout
//         // can refactor ^ into a global variable since used more than once
//     })
// }

// function addAttibutesButton() {

// }




