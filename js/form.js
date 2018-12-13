

// validacion del formulario
function validar(){
    
    var Nombre, Email, Telefono, Comentario;

    Nombre = document.getElementById("inputname").value;
    Email = document.getElementById("inputemail").value;
    Telefono = document.getElementById("inputtelefono").value;
    Comentario = document.getElementById("comentario").value;

    if(Nombre == "" || Email ==""|| Telefono ==""|| Comentario ==""){
        alert("Todos los campos son obligatorios")
        return false;
    }
    else if(Nombre.length >20){
        alert("El nombre es muy largo");
        return false;
    }
    else if(isNaN(Telefono)){
        alert("Escriba solo numeros en el campo telefono");
        return false;
    }
}

// Redireccion de contacto

function Redirecciongmail(){
    document.location.href="https://accounts.google.com/signin/v2/identifier?hl=es-419&continue=https%3A%2F%2Fwww.google.com.do%2Fsearch%3Fq%3Dgmail%26rlz%3D1C1CHBD_esDO819DO819%26oq%3Dgmail%26aqs%3Dchrome.0.0j69i61l2j0l3.693j0j7%26sourceid%3Dchrome%26ie%3DUTF-8%26pli%3D1&flowName=GlifWebSignIn&flowEntry=AddSession";
}
function Redireccionface(){
    document.location.href="https://www.facebook.com/Transporte-Camino-Real-126045764871933/?epa=SEARCH_BOX";
}
