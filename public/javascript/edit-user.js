async function editUser(event) {
    event.preventDefault();

    const title = document.querySelector('#title-edit').value.trim();
    const bio = document.querySelector('#bio-edit').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/authors/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, bio
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        console.log(response.statusText);
        alert(response.statusText);
    }
}

document.querySelector('#user-edit-form').addEventListener('submit', editUser);