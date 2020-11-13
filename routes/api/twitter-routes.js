require('dotenv').config()

//Pulls tweet info by ID so the data can be parsed
const tweetRequest = require('request');

//Authorization key - need to use dotenv to hide this!
const headers = {
    'Authorization': process.env.TW_BEARER_TOKEN
};

//Tweet ID info
const options = {
    url: 'https://api.twitter.com/2/tweets/1021840124064059392',
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
