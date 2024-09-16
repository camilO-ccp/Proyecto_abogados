function registrarBtn() {
    let datosFormulario = {
        nombres: document.getElementById("nombres").value,
        apellidos: document.getElementById("apellidos").value,
        Identificacion: document.getElementById("Identificacion").value,
        numero: document.getElementById("numero").value,
        correo: document.getElementById("correo").value,
        firma1: document.getElementById("firma1").value,
        numero1: document.getElementById("numero1").value,
        firma2: document.getElementById("firma2").value,
        numero2: document.getElementById("numero2").value,
        exprof: document.getElementById("exprof").value,
        especializacion: document.getElementById("especializacion").value,
        disponibilidad: document.getElementById("disponibilidad").value,
        trayectoria: document.getElementById("trayectoria").value,
        infoac: document.getElementById("infoac").value
    };

    for (const key in datosFormulario) {
        if (datosFormulario[key] === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }
    }

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuario registrado:', data);

        let mensaje = `Contacto:\nNombre: ${data.nombres}\nApellido: ${data.apellidos}\nIdentificación: ${data.Identificacion}\nNúmero de contacto: ${data.numero}\nCorreo: ${data.correo}\n\n`;
        mensaje += `Referencias:\nFirma 1: ${data.firma1}\nNúmero 1: ${data.numero1}\nFirma 2: ${data.firma2}\nNúmero 2: ${data.numero2}\n\n`;
        mensaje += `Perfiles detallados:\nExperiencia profesional: ${data.exprof}\nÁreas de especialización: ${data.especializacion}\nDisponibilidad: ${data.disponibilidad}\nTrayectoria: ${data.trayectoria}\nInformación académica: ${data.infoac}`;

        alert(mensaje);

        window.location.href = 'suits.html';

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(datosFormulario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Bienvenido Abogado.');
    });
}