async function addChapter(event) {
    event.preventDefault();

    var completed = document.querySelector('#completeCheck');
    const chapter_title = document.querySelector('#chapter-title').value.trim();
    const chapter_text = document.querySelector('#chapter-text').value.trim();
    const story_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/chapters', {
        
        method: 'POST',
        body: JSON.stringify({
            chapter_title,
            chapter_text,
            story_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    // if (completed.checked == true){
    //     // var completed = 1
    //     const response2 = await fetch(`/api/stories/${id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             // id,
    //             completed
    //         }),
    //         headers: { 'Content-Type': 'application/json' }
    //     });
    //     if (response2.ok) {
    //         console.log('true');
    //     } else {
    //         console.log(response2);
    //         alert(response2.statusText);
    //     }
    // } else {
    //     console.log('false');
    // }
 
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
        return twitterReport.json()
    }).then(function (twitterReport) {
        let resultDisp = document.getElementById('inspoDisplay');
        resultDisp.innerHTML = "";

        for (let i = 0; i < 5; i++) {
            let trendItem = document.createElement('li');
            trendItem.textContent = twitterReport[0].trends[i].name;
            resultDisp.appendChild(trendItem);
        }
    })
};

document.querySelector('#chapter-form').addEventListener('submit', addChapter);
document.querySelector('#twitter').addEventListener('click', trendRequest);