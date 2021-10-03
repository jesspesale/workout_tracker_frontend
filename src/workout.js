class Workout {

    constructor(id, workout) {
        this.id = id
        this.title = workout.title
        this.date = workout.date
        Workout.all.push(this)
        // this here will always be the new object being created
    }

    renderWorkout() {
        let element = document.getElementById(`workout-${this.id}`)
        //if the element of that ID exists already dont recreate the title/date elements
        if(typeof(element) != 'undefined' && element != null){
            return ""
        } else { 
            return `
                <div id="workout-${this.id}" data-id=${this.id}>
                <ul class="list-group">
                    <li class="list-group-item active"><strong>${this.title}</strong></li>
                    <li class="list-group-item"><strong>Date:</strong> ${this.date}</li>
                </ul>
                </div>`
            }
            // ^ here this is defined by what he function is called on
    }
}

Workout.all = []