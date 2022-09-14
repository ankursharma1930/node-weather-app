console.log("asddasdad");

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

// fetch('http://localhost:4000/weather?address=boston').then((response) => {
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

const weather_form = document.querySelector('form')
const searchval = document.querySelector('input')
const location_feild = document.querySelector('#location')
const weather_feild = document.querySelector('#weather')

weather_form.addEventListener('submit',(e) => {
    e.preventDefault();
    const searchloc = searchval.value

    fetch('http://localhost:4000/weather?address='+searchloc).then((response) => {
    response.json().then((data) =>{
        let location = data.location
        let weather = data.weather
        location_feild.textContent = location
        weather_feild.textContent = weather
    })
})

    console.log(searchloc);
})