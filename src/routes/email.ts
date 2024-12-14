import express from 'express';
import { sendEmail } from '../services/emailService';

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await sendEmail(name, email, message);
        res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }
});

export default router;
