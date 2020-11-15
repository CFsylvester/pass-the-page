async function logoutUser() {

    const response = await fetch('/api/authors/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(response.statusText);
        alert(response.statusText);
    }
}

document.querySelector('#logout-btn').addEventListener('click', logoutUser);