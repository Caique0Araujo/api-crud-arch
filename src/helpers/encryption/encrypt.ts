import { EncryptPasswordRepository } from './../../data/interfaces/encryptation/encryptPasswordRepository';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config();

export class EncryptPasswordRepositoryBcrypt implements EncryptPasswordRepository {
    async encrypt(password: string): Promise<string> {
        const salt: number = parseInt(process.env.ENCRYPT_SALT);
        return await bcrypt.hash(password, salt);
    }
}
