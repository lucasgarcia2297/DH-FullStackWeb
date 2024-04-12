//Clase 4 - Condicionales
//Microdesafio 1

//perfiles: administrador , asistente, invitado
const perfil = "AdminiStrador";
let mensaje = "";   /*Si no inicializo la variable, Javascript de 
                        todas formas va a crear la variable cuando 
                        le asigne un valor, pero la va a definir con var.
                        (esto puede suceder en algunos motores, podria no 
                        funcionar en otros motores o en otras versiones de node)
                    */
switch(perfil){
    case " ":
        mensaje = "Debe especificar el perfil del usuario.";
        break;
    case "administrador":
    case "ADMINISTRADOR":
    case "Administrador": 
        mensaje = "Usted tiene todos los privilegios de uso del sistema.";
        break;
    case "asistente":
    case "ASISTENTE":
    case "Asistente":
        mensaje = "Usted sólo tiene permisos de registrar, modificar y consultar datos.";
        break;
    case "invitado":
    case "INVITADO":
    case "Invitado":
        mensaje = "Usted sólo tiene permisos de consultar datos.";
        break;
    default:
        mensaje = "Debe especificar un perfil válido.";
        break;
}
console.log(mensaje);

//OTRA FORMA:
const perfil2 = perfil.toLowerCase(); //convierte todo a minuscula
switch(perfil2){
    case " ":
        mensaje = "Debe especificar el perfil del usuario.";
        break;
    case "administrador":
        mensaje = "Usted tiene todos los privilegios de uso del sistema.";
        break;
    case "asistente":
        mensaje = "Usted sólo tiene permisos de registrar, modificar y consultar datos.";
        break;
    case "invitado":
        mensaje = "Usted sólo tiene permisos de consultar datos.";
        break;
    default:
        mensaje = "Debe especificar un perfil válido.";
        break;
}
console.log(mensaje);
 