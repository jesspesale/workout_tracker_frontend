// console.log("in workout.js")

class Workout {

    constructor(id, workout) {
        this.id = id
        this.title = workout.title
        this.date = workout.date
        Workout.all.push(this)
    }

    renderWorkout() {
        let element = document.getElementById(`workout-${this.id}`)

        if(typeof(element) != 'undefined' && element != null){
            return ""
        } else {
            return `<div id="workout-${this.id}" data-id=${this.id}>
                <h2>Title: ${this.title}</h2>
                <h3>Date: ${this.date}</h3>
                </div>`
            }
    }
}

Workout.all = []