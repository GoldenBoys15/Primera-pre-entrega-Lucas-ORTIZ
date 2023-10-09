

var nombre=prompt("por favor, introduce tu nombre");

if (nombre != null){
    alert("hola " + nombre + ", ¡bienvenido!");
}

let categoria = prompt("¿que desea comprar? Escribe 1 si son remeras, 2 si son pantalones o 3 si son zapatillas");
let precio =0 ;
let articulo = '';
var contador= 0;

if (categoria == '1'){
    articulo = "Remera";
    precio = 5000;
}
else if ( categoria == '2'){
    articulo = "Pantalones";
    precio = 3500;
}
else if (categoria == '3'){
    articulo = "Zapatillas";
    precio = 7000;
} 
else{
    alert( "Opcion no valida, intente recargar la pagina")
}

if (articulo){
    let confimacion = confirm(`Usted eligio ${articulo}. Su precio es de $${precio}. ¿Desea comprar este articulo?`);
    if (confimacion){
        for (var i = 0; i < 1; i++){
            let direccion = prompt ("Ingrese su dirección para poder realizar el envío del pedido");
            alert(`su articulo será enviado a: ${direccion}`);
            alert("Muchas gracias por su compra");
            }
        }
        else{
            alert(" Muchas gracias por su visita ")
        }
    }



