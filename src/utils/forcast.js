const request = require('request')

const forcast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2b4023f12dd1a9c106b62acafcc4f6b6&query='+lat+','+long

    request({url: url, json:true}, (error, response) => {
            if(error){
                   callback("Here is an error", undefined)
            }else{
                    callback(undefined, {
                            weather: response.body.current.weather_descriptions[0]
                    })
            }
    })

}

module.exports = forcast