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

    // static findById(id) {
    //     this.all.find(exercise_attribute => exercise_attribute.id === this.id)
    // }

    attachDeleteButtonListener() {
       
    const deleteExerciseButton = document.getElementById(`button-${this.id}`)
   // debugger
    
        deleteExerciseButton.addEventListener('click', (e) => {
            this.deleteExercise(e)
        }
        )
    }

    //static deleteExercise(e) {
     deleteExercise(e) {
         const deleteExercise = document.getElementById(`exercise-${this.id}`)
         let ex = e
        e.preventDefault()
        const exercise = {id: this.id}
        //  debugger
        return fetch( exercise_url + "/" + this.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(exercise)
        })
        .then(resp => resp.json())
        .then(data => deleteExercise.remove() )

    }



    renderExercise() {
        return `
        <div id="exercise-${this.id}">
        <h3>Category: ${this.category}</h3>
        <h4>Calories: ${this.calories}</h4>
        <h4>Duration: ${this.duration} (in minutes)</h4> 
        <button id="button-${this.id}">Delete Exercise</button>
        </div>
        <br><br><br>`
    }

}

ExerciseAttribute.all = []