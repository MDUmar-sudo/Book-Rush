import dotenv from 'dotenv';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

// Loading environment variables from .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY);
const iv = Buffer.from(process.env.IV_SECRET); //IV : Initialization Vector


/* 
    Function to encrypt email
*/
export function encrypt(text) {

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encryptedText = cipher.update(text, 'utf8', 'hex');
    encryptedText += cipher.final('hex');
    return encryptedText;

};

/* 
    Function to decrypt 'encrypted' email
*/
export function decrypt(encryptedText) {
    
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decryptedText = decipher.update(encryptedText, 'hex', 'utf8');
    decryptedText += decipher.final('utf8');
    return decryptedText;
};

