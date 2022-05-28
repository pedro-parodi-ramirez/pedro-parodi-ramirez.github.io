const contactInfo = document.querySelector('#contactInfo');

document.getElementById('emailInfo').addEventListener( 'mouseover', () => {
    document.querySelector('#contactOptions').classList.add("d-none");
    contactInfo.classList.remove('d-none');
    contactInfo.innerHTML = `
        <h1>Mi correo personal es:<h1>
        pparodiramirez@gmail.com`;
});

document.getElementById('celphoneInfo').addEventListener( 'mouseover', () => {
    document.querySelector('#contactOptions').classList.add("d-none");
    contactInfo.classList.remove('d-none');
    contactInfo.innerHTML = `
        <h1>Mi teléfono personal es:<h1>
        +54 221 6203535`;
});

document.getElementById('contactInfo').addEventListener( 'mouseleave', () => {
    document.querySelector('#contactOptions').classList.remove("d-none");
    contactInfo.classList.add("d-none");
    contactInfo.innerHTML = "";
});