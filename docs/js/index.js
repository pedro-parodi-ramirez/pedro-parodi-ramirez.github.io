const contactInfo = document.querySelector('#contactInfo');
const carouselItemResume = document.querySelector('#carouselItemResume');

let typerwriterIteration = 0;
const divTypewriter = document.querySelector('#typewriter');

/********************************************************************************/
/****************************** SOCIAL MEDIA LOGOS ******************************/
/********************************************************************************/

document.getElementById('emailInfo').addEventListener('mouseenter', () => {
    document.querySelector('#contactOptions').classList.add("d-none");
    contactInfo.classList.remove('d-none');
    contactInfo.innerHTML = `<span class="fs-2 text-center d-flex justify-content-center aling-middle">Mi correo personal es:<br>pparodiramirez@gmail.com</span>`;
});

document.getElementById('celphoneInfo').addEventListener('mouseenter', () => {
    document.querySelector('#contactOptions').classList.add("d-none");
    contactInfo.classList.remove('d-none');
    contactInfo.innerHTML = `<span class="fs-2 text-center d-flex aling-middle">Mi teléfono personal es:<br>+54 221 6203535</span>`;
});

document.getElementById('contactInfo').addEventListener('mouseleave', () => {
    document.querySelector('#contactOptions').classList.remove("d-none");
    contactInfo.classList.add("d-none");
    contactInfo.innerHTML = "";
});


/********************************************************************************/
/*********************************** CAROUSEL ***********************************/
/********************************************************************************/

document.querySelector('#item-JS').addEventListener('mouseenter', (element) => {
    element.target.classList.add("opacity-25");
    carouselItemResume.classList.remove('d-none');
    carouselItemResume.innerHTML = `<h3 class="text-center fw-bold px-auto mx-auto">App para jugar al Dígalo con Mímica.<br>JS - HTML - CSS</h3>`;
});

document.querySelector('#item-POO').addEventListener('mouseenter', (element) => {
    element.target.classList.add("opacity-25");
    carouselItemResume.classList.remove('d-none');
    carouselItemResume.innerHTML = `<h3 class="text-center fw-bold px-auto mx-auto">Tienda de deportes.<br>Implementado en C# con Windows Forms.</h3>`;
});

document.querySelector('#item-POO').addEventListener('mouseleave', (element) => {
    element.target.classList.remove("opacity-25");
    carouselItemResume.classList.add('d-none');
    carouselItemResume.innerHTML = "";
});

document.querySelector('#item-JS').addEventListener('mouseleave', (element) => {
    element.target.classList.remove("opacity-25");
    carouselItemResume.classList.add('d-none');
    carouselItemResume.innerHTML = "";
});

/********************************************************************************/
/********************************** TYPEWRITER **********************************/
/********************************************************************************/
setInterval(() => {
    document.querySelector('#typewriterText').remove();

    switch (typerwriterIteration) {
        case 0:
            divTypewriter.innerHTML = `<span id="typewriterText" class="fs-3 text-start">Ingeniero Electrónico</span>`;
            typerwriterIteration++;
            break;
        case 1:
            divTypewriter.innerHTML = `<span id="typewriterText" class="fs-3 text-start">Autodidacta</span>`;
            typerwriterIteration++;
            break;
        case 2:
            divTypewriter.innerHTML = `<span id="typewriterText" class="fs-3 text-start">Determinación</span>`;
            typerwriterIteration++;
            break;
        case 3:
            divTypewriter.innerHTML = `<span id="typewriterText" class="fs-3 text-start">Trabajo en equipo</span>`;
            typerwriterIteration++;
            break;
        default:
            divTypewriter.innerHTML = `<span id="typewriterText" class="fs-3 text-start">Software Developer</span>`;
            typerwriterIteration = 0;
            break;
    }
}, 5000);