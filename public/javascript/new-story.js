const twitterBtn = document.getElementById('twitter');
async function addChapter(event) {
    event.preventDefault();

    const story_title = document.querySelector('#story-title').value.trim();
    const story_text = document.querySelector('#story-text').value.trim();
    const genre = document.querySelector('#story-genre').value;
    const story_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/stories', {
        method: 'POST',
        body: JSON.stringify({
            story_title,
            story_text,
            genre,
            story_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(response.statusText);
        alert(response.statusText);
    }
}

//Authorization key - Utilizes dotenv 
const headers = {
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAK69JgEAAAAASCtCX21dEEpAOZ7n2N%2FG1iNOlYM%3DzxdPg8TjiwnT7yx61VyQv5ksslndPNh9tcHf9YvL5og1yv4DAm'
};

//API Endpoint URL
const options = {
    url: 'https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/trends/place.json?id=1',
    headers: headers
};

//Returns any error codes
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

function trendRequest() {

    fetch(options.url, {
        method: 'GET',
        headers: headers
    }).then(function (twitterReport) {
        return twitterReport.json();
    }).then(function (twitterReport) {
        let resultDisp = document.getElementById('inspoDisplay');
        resultDisp.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            let trendItem = document.createElement('li');
            trendItem.textContent = twitterReport[0].trends[i].name;
            resultDisp.appendChild(trendItem);
        }
    });
};

document.querySelector('#story-form').addEventListener('submit', addChapter);
document.querySelector('#twitter').addEventListener('click', trendRequest);