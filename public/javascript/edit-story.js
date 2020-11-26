async function editStory(event) {
    event.preventDefault();

    const story_title = document.querySelector('#title-edit').value.trim();
    const story_text = document.querySelector('#story-edit').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (story_title && story_text) {
        const response = await fetch(`/api/stories/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ story_title, story_text }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }
    }
}

document.querySelector('#story-edit-form').addEventListener('submit', editStory);