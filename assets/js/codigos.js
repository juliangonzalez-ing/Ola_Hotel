
$('#carouselExampleSlidesOnly').carousel({
    interval: 5000,
});


function loSentimos() {
    Swal.fire({
        icon: 'info',
        title: 'Lo Sentimos',
        text: 'Este Sitio Web se encuentra en desarrollo, Lamentamos las molestias',
    })
}

function darInformacion() {
    let nombre = document.getElementById("nombre_user").value;
    let correo = document.getElementById("email_user").value;
    if (nombre != "" && correo != "") {
        Swal.fire({
            icon: 'success',
            title: 'Gracias ' + nombre,
            text: 'Pronto un Asesor lo contactará por correo para darle información',
            footer: '<a href="assets/html/contact.html" target="_blank">Obtener Consulta detallada</a>',
            timer: 10000,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Olvidó Ingresar un valor',
            footer: '<a href="assets/html/contact.html" target="_blank">Obtener Consulta detallada</a>',
        })
    }
}


function informacion(){}
    

function boletin(){
   let correoboletin = document.getElementById("email_boletin").value;
    if (correoboletin != "") {
        Swal.fire({
            icon: 'success',
            title: 'Gracias',
            text: 'A partir de ahora recibiras nuestras noticias, ofertas y promociones directo a tu correo electronico.',
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Olvidó Ingresar su correo',
            
        })
    }
}