const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer();
require('dotenv').config

const app = express();


app.post('/send-email', upload.none(), (req, res) => {

  console.log('solicitud recibida', req.body)

  
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    debug: true,
    logger: true,
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `Has recibido un mensaje de ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error enviando correo:', error);
      return res.status(500).send('Error al enviar el correo.');
    }
    console.log('Correo enviado:', info.response);
    res.status(200).send('Correo enviado con éxito.');
  });
  
});

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));