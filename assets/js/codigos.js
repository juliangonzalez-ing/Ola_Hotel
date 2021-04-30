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
        interval: 200,
    });




function loSentimos(){
alert("este sitio web esta en Construcción, lamentamos las molestias.")
}

function select(){
    var opc = document.getElementById("menu").value
    
    let precio = 0;
    if(opc == "papas"){
        precio = 1000;
        document.getElementById('hid').value = precio
    }
    console.log(precio)
}
function informacion(){
    let nombre=document.elementFromPoint("nomb").value
    let apellido=document.elementFromPoint("apellido").value
    let telefono=document.elementFromPoint("numero").value
    let correo=document.elementFromPoint("correo").value
    let mensaje=document.elementFromPoint("mensaje").value
    

/* f(nombre=!"" && apellido =!"" && telefono=! ){

}
 */

    Swal.fire({
        title: 'gracias',
        text: 'pronto un asesor se comunicara contigo',
        imageUrl: '../img/logo-ola.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    
}