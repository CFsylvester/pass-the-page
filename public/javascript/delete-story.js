async function deleteStory(event) {
    event.preventDefault();

    const storyTitle = document.querySelector('#title-edit').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const confirmDelete = confirm(`Are you sure you want to delete ${storyTitle}?`);

    if (confirmDelete) {
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
}

document.querySelector('#delete-btn').addEventListener('click', deleteStory);;