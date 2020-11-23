async function loginUser(event) {
    event.preventDefault();

    const username = document.querySelector('#login-name').value.trim();
    const password = document.querySelector('#login-pw').value.trim();

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