const twich = document.querySelector('.twich .container');
const youtube = document.querySelector('.youtube .container');
const tabtwich = document.querySelector('.tabtwich');
const tabyoutube = document.querySelector('.tabyoutube');

tabtwich.addEventListener('click', () => {
    twich.style.display = 'block';
    youtube.style.display = 'none';
    tabtwich.style.backgroundColor = '#d3d1e5';
    tabyoutube.style.backgroundColor = '#eeeeee';
})

tabyoutube.addEventListener('click', () => {
    twich.style.display = 'none';
    youtube.style.display = 'block';
    tabtwich.style.backgroundColor = '#eeeeee';
    tabyoutube.style.backgroundColor = '#efd1d1';
})