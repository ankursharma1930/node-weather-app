const path = require('path')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const express = require('express')
const hbs = require('hbs')

const app = express()

const publicDirectoryPath = path.join(__dirname,"../public")
const viewPath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")
console.log(partialsPath)


app.use(
    "/css",
    express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
  )
  app.use(
    "/js",
    express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
  )

  app.use(
    "/customjs",
    express.static(path.join(__dirname, "../public/js"))
  )

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title : "Weather app",
        name : 'Ankur'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title : "This is about page",
        name : 'My name is ankur sharma'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){
       return  res.send({
            error: "Search is missing"
        })
    }

    geocode(req.query.address , (error, {latitude, longitude, location} = {}) => {
        //console.log(location)
        if(error){
                return console.log("Erroroorr")
        }else{
                forcast(latitude,longitude, (forcastError, {weather = {}}) => {
                        res.send({
                            weather : weather,
                            location: location
                        })
                        //return console.log(weather);
                })
        }
        
})

    // res.send({
    //     title : "weather page",
    //     name : 'All weather resules will show here',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) =>{

    if(!req.query.search){
        res.send({
            error: "Search is missing"
        })
    }

    console.log(req.query.search)
    res.send({
        error: false
    })
})

app.listen(4000, () => {
    console.log("Asdasd")
})