export function send_email(form) {
    
    const formData = new FormData(form);
    console.log('ingresa')

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('status').textContent = 'Correo enviado con éxito.';
        } else {
            document.getElementById('status').textContent = 'Hubo un error al enviar el correo.';
        }
    })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById('status').textContent = 'Error al enviar el correo.';
        });
    };