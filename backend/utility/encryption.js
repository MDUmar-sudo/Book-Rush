import dotenv from 'dotenv';
import path from 'path';
import crypto from 'crypto';

dotenv.config({ path: path.resolve('./backend/.env') }); // Loading environment variables from .env
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

