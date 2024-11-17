import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());

// Secret Key for Encryption/Decryption
const SECRET_KEY = process.env.SECRET_KEY || 'mysecretkey'; // Replace with a strong key
const ALGORITHM = 'aes-256-cbc';

// Encrypt Text
const encryptText = (plainText) => {
    const iv = crypto.randomBytes(16); // Initialization vector
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY, 'utf-8'), iv);
    let encrypted = cipher.update(plainText, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
};

// Decrypt Text
const decryptText = (encryptedText, iv) => {
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY, 'utf-8'), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

// Routes
app.post('/encrypt', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).send('Text is required');
    }

    try {
        const encrypted = encryptText(text);
        res.status(200).send({
            message: 'Text encrypted successfully',
            encryptedText: encrypted.encryptedData,
            iv: encrypted.iv
        });
    } catch (err) {
        res.status(500).send('Error encrypting text');
    }
});

app.post('/decrypt', (req, res) => {
    const { encryptedText, iv } = req.body;

    if (!encryptedText || !iv) {
        return res.status(400).send('Both encryptedText and iv are required');
    }

    try {
        const decrypted = decryptText(encryptedText, iv);
        res.status(200).send({
            message: 'Text decrypted successfully',
            decryptedText: decrypted
        });
    } catch (err) {
        res.status(500).send('Error decrypting text');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
