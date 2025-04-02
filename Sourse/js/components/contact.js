export const contact = `
  <section class="form_main div_center">
                <form method="post" id="form" name="form" action="/send-email" class="div_center">
                    <label for="name">Nombre: </label>
                    <input type="text" id="name" name="name" required>
                    
                    <label for="email">Email: </label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Mensaje: </label>
                    <textarea name="message" id="message" required></textarea>

                    <button type="submit" id="send_email">Enviar</button>
                </form>
            </section>
            <section class="contacts_main">
                <div class="div_container_contacts">
                    <div>
                        <img src="./Sourse/ico/phone-solid.svg" alt="Icono de movil">
                        <p>+34600225169</p>
                    </div>
                    <div>
                        <img src="./Sourse/ico/linkedin-in-brands-solid.svg" alt="Icono de linkedin">
                        <p>Linkedin</p>
                    </div>
                </div>
            </section>
`