/*     var num1 = prompt("Ingrese el primer número: ");
    var num2 = prompt("Ingrese el segundo número: ");
    var suma = parseInt(num1) + parseInt(num2);
    alert("La suma de los números ingresados es: " + suma)
    var contador = 1;
    var sumaLista = 1;
    while(contador <= suma){
        console.log(sumaLista);
        contador++;
        sumaLista = sumaLista + contador;        
    }
 */
/* 
    var num1 = prompt("ingrese un número: ");
    if((num1 % 2) == 0){
        console.log("El número es par");
    }else{
        console.log("El número es impar");
    }
 *//* 
   var num1 = prompt("ingrese un número: ");
   var num2 = prompt("Cantidad de multiplicaciones: ");
   if(num1 != '' && num2 != ''){
       for(var x = 1; x <= num2; x++){                       
           alert(num1 +" * " + x + " = " + (num1*x))                    
       }
   }else{        
       alert('Ingrese todos los datos');
   }
   */
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

function select() {
    var opc = document.getElementById("menu").value

    let precio = 0;
    if (opc == "papas") {
        precio = 1000;
        document.getElementById('hid').value = precio
    }
    console.log(precio)
}

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