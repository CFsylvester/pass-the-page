async function addChapter(event) {
    event.preventDefault();

    const chapter_title = document.querySelector('#chapter-title').value.trim();
    const chapter_text = document.querySelector('#chapter-text').value.trim();
    const story_id = window.location.toString().split('/')[
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

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(response.statusText);
        alert(response.statusText);
    }
}

document.querySelector('#chapter-form').addEventListener('submit', addChapter);