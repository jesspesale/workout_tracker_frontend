// console.log("in workout.js")

class Workout {

    constructor(data) {
        // debugger
        this.id = data.id
        this.title = data.title;
        this.date = data.date;
    }

    // function renderWorkout(workoutId, workout) {
    //     const postWorkout = ` <div id="workout-${workoutId}" data-id=${workoutId}>
    //         <h2>Title: ${workout.title}</h2>
    //         <h3>Date: ${workout.date}</h3>`
    //     document.querySelector('#workout-container').innerHTML +=  postWorkout
    // }

}