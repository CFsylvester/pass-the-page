async function addChapter(event) {
    event.preventDefault();

    const story_title = document.querySelector('#story-title').value.trim();
    const story_text = document.querySelector('#story-text').value.trim();
    const story_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/stories', {
        method: 'POST',
        body: JSON.stringify({
            story_title,
            story_text,
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

document.querySelector('#story-form').addEventListener('submit', addChapter);