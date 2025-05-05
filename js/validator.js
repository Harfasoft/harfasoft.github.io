const Messages = Object.freeze({
    ERROR: "Por favor, ingrese un nombre válido (solo letras y espacios).",
    success: "Formulario enviado con éxito!",
    TITLE_ERROR: "Error",
    TITLE_SUCCESS: "Envío exitoso"
});

const clearForm = () => {
    document.getElementById("form_contact").reset();
    /*document.getElementById("form_contact").style.display = "none"; */
}

const validate = ()=> {

    // Validación del nombre (solo letras y espacios)
    let txtFullName = document.getElementById("txtFullName").value;
    let regexName = /^[a-zA-Z\s]+$/;
    if (!regexName.test(txtFullName)) {
        Swal.fire({            
            text: Messages.ERROR,                       
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        //alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        return false;
    }

    // Validación del correo electrónico
    let txtEmail = document.getElementById("txtEmail").value;
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(txtEmail)) {
        Swal.fire({            
            text: Messages.ERROR.replace("nombre", "correo electrónico"),            
            icon: "error",
            confirmButtonText: "Aceptar",
          });        
        return false;
    }

    // Validación del nombre (solo letras y espacios)
    let textaMessages = document.getElementById("textaMessages").value;
    let regexTextaMessages = /^[a-zA-Z\s]+$/;
    if (!regexTextaMessages.test(textaMessages)) {
        Swal.fire({
            title: Messages.TITLE_ERROR,
            text: Messages.ERROR.replace("nombre", "mensaje"),  
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        return false;
    }

    // Validación del número de teléfono (solo números, con 10 dígitos)
    let telefono = document.getElementById("telefono").value;
    let regexTelefono = /^[0-9]{10}$/;
    if (!regexTelefono.test(telefono)) {
        Swal.fire({
            title: "Error",
            text: "Por favor, ingrese un nombre válido (solo letras y espacios).",            
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        return false;
    }

    // Si todo es válido, el formulario se puede enviar
    Swal.fire({
        title: "Envío exitoso",
        text: "Formulario enviado con éxito!",        
        icon: "success",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
      });
    //alert("Formulario enviado con éxito!");
    clearForm();
    //displayFormContact('none');
    return true;
}