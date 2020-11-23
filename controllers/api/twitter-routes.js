require('dotenv').config()

//Pulls Twitter trending topics
const tweetRequest = require('request');

//Authorization key - Utilize dotenv 
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

//Calling the function back for tweet info
tweetRequest(options, callback);

module.exports = tweetRequest;