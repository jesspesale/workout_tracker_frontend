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
            e.preventDefault()
            this.deleteExercise(e)
            }
        )
    }

     deleteExercise(e) {
        const deletedExercise = document.getElementById(`exercise-${this.id}`)
        const exercise = {id: this.id}
        return fetch( exercise_url + "/" + this.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(exercise)
        })
        .then(resp => resp.json())
        .then(data => deletedExercise.remove() )
    }

    renderExercise() {
        return `
         <div id="exercise-${this.id}">
            <li class="list-group-item"><strong>Category:</strong> ${this.category}</li>
            <li class="list-group-item"><strong>Calories: </strong>${this.calories} </li>
            <li class="list-group-item"><strong>Duriation: </strong>${this.duration} minutes</li>
            <button id="button-${this.id}" type="button" class="list-group-item list-group-item-action">Delete Exercise</button>
            </div>
            <br>`
    }
}

ExerciseAttribute.all = []