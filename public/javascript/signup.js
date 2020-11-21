async function createUser(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-name').value.trim();
    const password = document.querySelector('#signup-pw').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const title = document.querySelector('#signup-title').value.trim();
    const bio = document.querySelector('#signup-bio').value.trim();

    if (username && password && email) {
        const response = await fetch('/api/authors', {
            method: 'POST',
            body: JSON.stringify({
                username, password, email, title, bio
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/login');
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', createUser);