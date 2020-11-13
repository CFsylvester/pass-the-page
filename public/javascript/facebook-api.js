const fbApi = '';

// function fbRequest() {
//     fetch(fbApi)
//         .then(fbData => {
//             return fbData.json();
//         })
//         .then(fbData => {
//             console.log('fbData:', fbData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// }


async function fbRequest(fbUsername) {
    const response = await fetch(fbApi, {
        methpd: 'GET',
    });

    if (response.ok) {
        console.log(response.json());
    } else {
        console.log(response.statusText);
        throw new Error(message);
    }
}

// fbRequest();