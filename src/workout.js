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
        //if the element of that ID exists dont recreate the title/date elements
        if(typeof(element) != 'undefined' && element != null){
            return ""
        } else { 
            return `
        <div id="workout-${this.id}" data-id=${this.id}>
        <ul class="list-group">
            <li class="list-group-item active">${this.title}</li>
            <li class="list-group-item">Date: ${this.date}</li>
        </ul>
        </div>`
            }
    }
}

Workout.all = []