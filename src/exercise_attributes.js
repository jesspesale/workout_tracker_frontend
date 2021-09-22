// console.log("in exercise_attribute.js")

class ExerciseAttribute {

    constructor(attribute) {
        // debugger
        this.id = attribute.id
        this.category = attribute.category
        this.calories = attribute.calories
        this.duration = attribute.duration
        this.workout_id = attribute.workout_id
        ExerciseAttribute.all.push(this)
    }

    renderAttributes() {
        return `
        <h3>Category: ${this.category}</h3>
        <h4>Calories: ${this.calories}</h4>
        <h4>Duration: ${this.duration} (in minutes)</h4> 
        <button data-id=${this.workout_id}>Delete Workout</button>
        </div> <br><br><br>`
    }


}

ExerciseAttribute.all = []