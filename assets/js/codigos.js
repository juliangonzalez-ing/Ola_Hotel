/* aca configuramos el intervalo de las imagenes del carrusel del INDEX */
$('#carouselExampleSlidesOnly').carousel({
    interval: 2000,
});

/* esta funcion toma los datos del formulario basico del index y valida */
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
    } else if (email.value == '') {
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
//alt + shift + f   <------- IDENTAR CODIGO u ORGANIZAR CODIGO

/* esta funcion valida los datos del formulario de la pagina CONTACTO */
function informacion() {
    let nombre = document.getElementById("nomb").value
    let apellido = document.getElementById("apellido").value
    let telefono = document.getElementById("numero").value
    let correo = document.getElementById("correo").value
    let mensaje = document.getElementById("mensaje").value

    if (nombre != "" && apellido != "" && telefono != "" && correo != "" && mensaje != "") {
        Swal.fire({
            title: 'Gracias',
            text: 'Pronto un asesor se comunicará contigo',
            imageUrl: '../img/logo-ola.png',
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
            timer: 3000,
            showConfirmButton: false,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Faltan datos por ingresar!',
        })
    }
}

/* esta funcion valida el correo introducido en el FOOTER */
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

/* esta funcion se ejecuta en la pagina de OFERTAS */
function cupon(){
    Swal.fire({
        icon: 'success',
        title: 'Genial!',
        text: 'El código del cupón ha sido copiado, para redimirlo da click en el enlace.',
        footer: '<a href="#">Redimir cupón</a>'
    })
}