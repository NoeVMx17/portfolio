let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function toggleDropdown(id) {
    const content = document.getElementById(id);
    content.classList.toggle("oculto");
}

function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-cat], [data-es], [data-en]');

    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${language}`);
    });
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function redirigir(nuevaURL){
    //voy a la pagina web
    //document.getElementsByClassName("redes").classList = "";
    window.location.href = nuevaURL;
}

document.addEventListener("DOMContentLoaded", function() {
    
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function(dropdown) {
        var dropBtn = dropdown.querySelector('button');
        var dropContent = dropdown.querySelector('.oculto');

        dropBtn.addEventListener('click', function() {
            if (dropContent.style.display === "none" || dropContent.style.display === "") {
                dropContent.style.display = "block";
            } else {
                dropContent.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.proyectos-video');

    videos.forEach(video => {
        video.addEventListener('mouseover', function() {
            video.play();
        });

        video.addEventListener('mouseout', function() {
            video.pause();
            video.currentTime = 0; // Opcional: reiniciar el video al inicio
        });
    });
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.proyectos-item');

    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else if (project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

document.getElementById('form-button').addEventListener('click', function() {
    // Obtener los valores de los campos del formulario
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Verificar si los campos están llenos
    if (fullName && email && message) {
        // Simulación del envío del formulario
        // Aquí puedes agregar tu lógica para enviar los datos a un servidor usando AJAX o fetch
        
        // Mostrar un mensaje de éxito
        const responseElement = document.getElementById('form-response');
        responseElement.textContent = "Your message has been sent successfully!";
        responseElement.style.display = "block";
    } else {
        // Mostrar un mensaje de error si los campos no están llenos
        const responseElement = document.getElementById('form-response');
        responseElement.textContent = "Please fill in all fields.";
        responseElement.style.display = "block";
    }
});