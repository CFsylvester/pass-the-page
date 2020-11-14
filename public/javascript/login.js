// For now username and password will log in, 
// but i'd like to try and add the option to use either username or email for login later

async function loginUser(event) {
    event.preventDefault();

    const username = document.querySelector('#login-name').value.trim();
    const password = document.querySelector('#login-pw').value.trim();
    // const email = document.querySelector('#email-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/authors/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            console.log(response.statusText);
            alert(response.statusText);
        }
    }
};

document.querySelector('#login-form').addEventListener('submit', loginUser);