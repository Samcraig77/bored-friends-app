const currentActivities = []

const activityInput = document.getElementById('activity-input')
const submitBtn = document.getElementById('submit-btn')
const activitiesArea = document.getElementById('activities-area') 
const inputForm = document.getElementById('input-form')

// && displayActivities(currentActivities)
document.addEventListener('click', (e) => {

    e.target === submitBtn ? e.preventDefault() & pushInput(currentActivities, activityInput) : ''
})

function pushInput(arr, input) {
    
    arr.push(`<li class="activity-li" data-uuid="${crypto.randomUUID()}">${input.value}</li>`)
    input.value = ''
    console.log(arr)
    activitiesArea.innerHTML = currentActivities.join('')
}

// function displayActivities(arr) {
    
//     let allActivities = '' 

//     arr.forEach(activity => {
//        allActivities += `<li>
//             <p>${activity.key}</p>
//         </li>`
//     })
    
//     console.log(allActivities)
    
//     activitiesArea.innerHTML = allActivities
// }