// console.log("in workout.js")

class Workout {

    constructor(id, workout) {
        // debugger
        this.id = id
        this.title = workout.title
        this.date = workout.date
        Workout.all.push(this)
        // debugger
    }

    
    renderWorkout() {
        // debugger
        return `<div id="workout-${this.id}" data-id=${this.id}>
            <h2>Title: ${this.title}</h2>
            <h3>Date: ${this.date}</h3>`
    }

}

Workout.all = []