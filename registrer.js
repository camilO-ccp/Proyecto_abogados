function registrarUsuario() {
    let Formulario = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        correo: document.getElementById("correo").value,
        contraseña: document.getElementById("contraseña").value
    };

    // Validación de campos vacíos
    for (const key in Formulario) {
        if (Formulario[key] === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }
    }

    // Enviar datos al servidor
    fetch('http://localhost:3000/iniciosesion/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario registrado con éxito:', data);

        let lista = `Usuario Registrado:\n\n`;
        lista += `Nombres: ${Formulario.nombres}\nApellidos: ${Formulario.apellidos}\nCorreo: ${Formulario.correo}\n`;

        alert(lista);

        // Redirigir a la página suits.html
        window.location.href = 'suits.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al registrar el usuario.');
    });
}
