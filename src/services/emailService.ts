import nodemailer from 'nodemailer';

export async function sendEmail(name: string, email: string, message: string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS, 
        },
    });

   
    const receiverEmail = process.env.EMAIL_USER;

    
    const mailOptions = {
        from: `"${name}" <${email}>`, 
        to: receiverEmail,
        subject: `Nova mensagem de contato: ${name}`,
        text: `Você recebeu uma mensagem de contato de:\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`, 
    };

    try {
       
        await transporter.sendMail(mailOptions);
        console.log("Email enviado com sucesso!");
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        throw new Error('Erro ao enviar o email.');
    }
}
