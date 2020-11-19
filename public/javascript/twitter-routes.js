const fetch = require("node-fetch");
require('dotenv').config()

//Authorization key - Utilizes dotenv 
const headers = {
    'Authorization': process.env.TW_BEARER_TOKEN
    };

//API Endpoint URL
const options = {
    url: 'https://api.twitter.com/1.1/trends/place.json?id=1',
    headers: headers
};

//Returns any error codes
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

function trendRequest(){

    fetch(options.url, {
        method: 'GET',
        headers: headers
    }).then(function (twitterReport) {
        return twitterReport.json()
    }).then(function (twitterReport) {
        console.log(twitterReport[0].trends[1].name);
    })
};

//Exporting the function call for trend info
module.exports = trendRequest(callback);