// console.log("in workout.js")

class Workout {

    constructor(id, workout) {
        // debugger
        this.id = id
        this.title = workout.title
        this.date = workout.date
        Workout.all.push(this)
        debugger
    }

    // function renderWorkout(workoutId, workout) {
    //     const postWorkout = ` <div id="workout-${workoutId}" data-id=${workoutId}>
    //         <h2>Title: ${workout.title}</h2>
    //         <h3>Date: ${workout.date}</h3>`
    //     document.querySelector('#workout-container').innerHTML +=  postWorkout
    // }

}

Workout.all = []