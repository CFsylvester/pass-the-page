async function deleteStory(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/stories/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log(response.statusText);
        alert(response.statusText);
    }
}

document.querySelector('#delete-confirm').addEventListener('click', deleteStory);