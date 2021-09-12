const attr_url = "http://127.0.0.1:3000/api/v1/exercise_attributes"

document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom is loaded")
    getExerciseAttributes()
} )

function getExerciseAttributes() {
    fetch(attr_url)
    .then(response => response.json())
    .then(attr => {
        console.log(attr)
    })
}

