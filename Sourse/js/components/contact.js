export const contact = `
  <section class="section_contact div_center">
                <h1>Contacto</h1>
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
            <section class="contacts_main div_center">
                <h2>Redes</h2>
                <div class="div_container_contacts div_center">
                    <a class="contact_tag div_center" href="#">
                        <img src="./Sourse/ico/github-brands.svg" alt="Icono de github">
                    </a>
                    <a class="contact_tag div_center" href="https://www.linkedin.com/in/lautarofonsecatecch/">
                        <img src="./Sourse/ico/linkedin-brands.svg" alt="Icono de linkedin">
                    </a>   
                </div>
            </section>
        </section>
`