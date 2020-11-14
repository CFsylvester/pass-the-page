const username = document.querySelector('#signup-username').value.trim();
const password = document.querySelector('#signup-pw').value.trim();
const email = document.querySelector('#signup-email').value.trim();
const title = document.querySelector('#signup-title').value.trim();
const bio = document.querySelector('#signup-bio').value.trim();

async function createUser(event) {
    event.preventDefault();

    if (username && password && email && title && bio) {
        const response = await fetch('/api/authors', {
            method: 'POST',
            body: JSON.stringify({
                username, password, email, title, bio
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log(`Account for ${username} has been created!`);
            document.location.replace('/login');
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', createuser);