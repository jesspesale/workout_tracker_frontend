// console.log("in exercise_attribute.js")

class ExerciseAttribute {

    constructor(attribute) {
        this.id = attribute.id
        this.category = attribute.category
        this.calories = attribute.calories
        this.duration = attribute.duration
        this.workout_id = attribute.workout_id
        
    }

    // function renderAttributes(workoutId, attributes) {

    //         const postAttributes = `
    //         <h3>Category: ${attributes.category}</h3>
    //         <h4>Calories: ${attributes.calories}</h4>
    //         <h4>Duration: ${attributes.duration} (in minutes)</h4> 
    //         <button data-id=${workoutId}>Delete Workout</button>
    //         </div>
    //         <br><br>`

    //         document.querySelector(`#workout-${workoutId}`).innerHTML += postAttributes
        
    // }
}