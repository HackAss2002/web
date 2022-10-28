const baseUrl = 'https://jsonplaceholder.typicode.com/';

const getPhotos = async (albumId) => {
    return await fetch(`${baseUrl}albums/${albumId}/photos`)
        .then(response => response.json());
}

if (!sessionStorage.getItem('page'))
    sessionStorage.setItem('page', '1');

const container = document.getElementById('album-list');
const pagination = document.getElementById('pages');
const buttons = [...pagination.children];


const loadPhotos = async () => {
    container.innerHTML = '<img src="images/butcher_tea.gif" width="600" height="300" alt="mask">';

    try {
        const data = (await getPhotos(sessionStorage.getItem('page'))).slice(0, 10);

        buttons.forEach(button => {
            if (button.innerText === sessionStorage.getItem('page'))
                button.classList.add('pages_span_active');
            else
                button.classList.remove('pages_span_active');
        });

        container.innerHTML = '';
        for (const item of data) {
            container.innerHTML += `
     <div class="photo__container">
      <img src=${item.url} alt="image preview" class="photo"/>
      <h5 class="photo__title">${item.title}</h5>
     </div>
     `
        }
    } catch (e) {
        container.innerHTML = '<img src="images/oi.gif" width="600" height="300" alt="mask">';
    }
}
loadPhotos();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText === sessionStorage.getItem('page'))
            return;

        sessionStorage.setItem('page', button.innerText);
        loadPhotos();
    });
});
