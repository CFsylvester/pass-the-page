async function createUser(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-name').value.trim();
    const password = document.querySelector('#signup-pw').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    // const title = document.querySelector('#signup-title').value.trim();
    // const bio = document.querySelector('#signup-bio').value.trim();

    console.log('test', username, password, email);

    if (username && password && email) {
        const response = await fetch('/api/authors', {
            method: 'POST',
            body: JSON.stringify({
                username, password, email
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            // console.log(`Account for ${username} has been created!`);
            document.location.replace('/login');
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }
    }
};

document.querySelector('#signup-form').addEventListener('submit', createUser);