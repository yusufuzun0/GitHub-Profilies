const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


const URL = 'https://api.github.com/users/';

async function getUser(user) {
    const resp = await fetch(URL + user);
    const respData = await resp.json();

    createUserCard(respData);
}





function createUserCard(user) {

    const card =
        `
        <div class="card">
            <div class="img-container">
                <img src="${user.avatar_url} " alt="${user.name}">
            </div>
            <div class="card-content">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}</li>
                    <li>${user.following}</li>
                    <li>${user.public_repos}</li>
                </ul>
            </div>
         </div>
    `;

    main.innerHTML = card;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);
    }

    search.value = '';

});