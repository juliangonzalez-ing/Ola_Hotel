$('#carouselExampleSlidesOnly').carousel({
    interval: 3600,
});


function loSentimos() {
    Swal.fire({
        icon: 'info',
        title: 'Lo Sentimos',
        text: 'Este Sitio Web se encuentra en desarrollo, Lamentamos las molestias',
    })
}

function darInformacion() {
    let nombre = document.getElementById("nombre")
    let email = document.getElementById("email")
    if (nombre.value != "" && email.value != "") {
        Swal.fire({
            icon: 'success',
            title: 'Recibido!',
            text: 'Pronto un Asesor lo contactará por correo para darle información',
            timer: 2000,
            showConfirmButton: false
        })
    } else if (nombre.value == '' && email.value == '') {
        nombre.focus();
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingrese todos los datos!',
        })        
    } else if (nombre.value == '') {
        email.focus();
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Olvidó ingresar su nombre',
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Olvidó ingresar su email',
        })
        
    }
}


function boletin() {
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