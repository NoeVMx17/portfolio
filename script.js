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
        if (element.placeholder) {
            element.placeholder = element.getAttribute(`data-${language}`);
        } else {
            element.textContent = element.getAttribute(`data-${language}`);
        }
    });

    const cvLink = document.getElementById("cv-download");

    if (language === "es") {
        cvLink.href = "CV_NoeVillanueva ESP.pdf";
    } else if (language === "en") {
        cvLink.href = "CV_NoeVillanueva ENG.pdf";
    } else if (language === "cat") {
        cvLink.href = "CV_NoeVillanueva.pdf";
    }
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
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        const video = icon.querySelector('video');
        const img = icon.querySelector('img'); // Seleccionamos la imagen

        icon.addEventListener('mouseover', function() {
            video.play();
            video.style.opacity = "1";  // Mostramos el video
            img.style.opacity = "0";    // Ocultamos la imagen
        });

        icon.addEventListener('mouseout', function() {
            video.pause();
            video.currentTime = 0;      // Reiniciamos el video
            video.style.opacity = "0";  // Ocultamos el video
            img.style.opacity = "1";    // Mostramos la imagen
        });
    });
});
/*document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.icon');

    icons.forEach(icon => {
        const video = icon.querySelector('video');

        icon.addEventListener('mouseover', function() {
            video.play();
        });

        icon.addEventListener('mouseout', function() {
            video.pause();
            video.currentTime = 0; // Opcional: reiniciar el video al inicio
        });
    });
});*/
/*document.addEventListener("DOMContentLoaded", function() {
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
});*/

function filterProjects(category) {
    const buttons = document.querySelectorAll('.proyectos-filters button');

    // Remove active class from all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const isMatchedCategory = category === 'all' || card.classList.contains(category);
        card.style.display = isMatchedCategory ? 'block' : 'none';
    });
}
  

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('form-button').addEventListener('click', function() {
        // Obtener los valores de los campos del formulario
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Obtener el elemento de respuesta
        const responseElement = document.getElementById('form-response');

        // Verificar si los campos están llenos
        if (fullName && email && message) {
            // Verificar si el campo de correo contiene un '@'
            if (email.includes('@')) {
                // Construir el cuerpo del correo
                const subject = 'Consulta sobre portafolio';
                const body = `Hola Noé,

Quiero consultarte sobre tu portafolio.

Nombre: ${fullName}
Correo: ${email}
Mensaje: ${message}`;

                // Codificar el sujeto y el cuerpo del correo
                const mailtoLink = `mailto:nvillanuevamoya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Abrir el enlace mailto
                window.location.href = mailtoLink;

                // Mostrar un mensaje de éxito
                responseElement.textContent = "Your message has been prepared in your email client!";
                responseElement.style.display = "block";
            } else {
                // Mostrar un mensaje de error si el correo no contiene un '@'
                responseElement.textContent = "Please enter a valid email address.";
                responseElement.style.display = "block";
            }
        } else {
            // Mostrar un mensaje de error si los campos no están llenos
            responseElement.textContent = "Please fill in all fields.";
            responseElement.style.display = "block";
        }
    });
});

/*function showSection(sectionId) {
    // Selecciona todas las secciones y botones
    var sections = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');
    
    // Oculta todas las secciones y quita la clase 'active' de todos los botones
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    
    // Muestra la sección activa y agrega la clase 'active' al botón correspondiente
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}*/

// Inicializa mostrando la sección de educación
document.addEventListener('DOMContentLoaded', function() {
    showSection('education');
});

