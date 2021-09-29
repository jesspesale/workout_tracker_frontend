// console.log("in exercise_attribute.js")

class ExerciseAttribute {

    constructor(attribute) {
        this.id = attribute.id
        this.category = attribute.category
        this.calories = attribute.calories
        this.duration = attribute.duration
        this.workout_id = attribute.workout_id
        ExerciseAttribute.all.push(this)
    }


    attachDeleteButtonListener() {  
    const deleteExerciseButton = document.getElementById(`button-${this.id}`)
    
        deleteExerciseButton.addEventListener('click', (e) => {
            this.deleteExercise(e)
            }
        )
    }


     deleteExercise(e) {
         const deleteExercise = document.getElementById(`exercise-${this.id}`)
         let ex = e
        e.preventDefault()
        const exercise = {id: this.id}
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
            <li class="list-group-item">Category: ${this.category}</li>
            <li class="list-group-item">${this.calories} calories</li>
            <li class="list-group-item">${this.duration} minutes</li>
            <button id="button-${this.id}" type="button" class="list-group-item list-group-item-action">Delete Exercise</button>
            </div>
            <br>
        `
    }

}

ExerciseAttribute.all = []