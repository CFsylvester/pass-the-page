async function logoutUser(event) {
    event.preventDefault();

    const response = await fetch('api/authors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        console.log('Logged out!');
        document.location.replace('/');
    } else {
        console.log(response.statusText);
        alert(response.statusText);
    }
}

document.querySelector('#logout-btn').addEventListener('click', logoutUser);