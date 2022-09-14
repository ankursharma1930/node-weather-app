const request = require('request')

const geocode = (address, callback) => {
    const geoUrl = 'http://api.positionstack.com/v1/forward?access_key=35c87d6432785dcab99d878e7dccad96&query='+address

    request({url: geoUrl, json:true}, (error, response) => {
            if(error){
                   callback("Here is an error", undefined)
            }else{
                    callback(undefined, {
                            latitude: response.body.data[0].latitude,
                            longitude: response.body.data[0].longitude,
                            location: response.body.data[0].name
                    })
            }
    })
}

module.exports = geocode