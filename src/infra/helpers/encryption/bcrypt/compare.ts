import { ComparePasswordsRepository } from '../../../../data/interfaces/validation/comparePasswordsRepository';
import bcrypt from 'bcrypt';

export class ComparePasswordsRepositoryBcrypt implements ComparePasswordsRepository {
    async compare(inputPassword: string, dataBasePassword: string): Promise<Boolean> {

        return await bcrypt.compare(dataBasePassword, inputPassword) ? false : true

    }
}
