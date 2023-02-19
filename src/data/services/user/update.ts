import { GetUserByLoginRepository } from './../../interfaces/user/getByLoginRepository';
import { UserExistsRepository } from './../../interfaces/user/existsRepository';
import { UpdateUserUseCase } from "../../../domain/useCases/user/update";
import { UpdateUserRepository } from "../../interfaces/user/updateRepository";
import { NotFoundError } from '../../../domain/errors/NotFoundError';
import { AlreadyExistsError } from '../../../domain/errors/AlreadyExists';
import { EncryptPasswordRepository } from '../../interfaces/encryptation/encryptPasswordRepository';

export class UpdateUserService implements UpdateUserUseCase {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly userExistsRepository: UserExistsRepository,
    private readonly getUserByLoginRepository: GetUserByLoginRepository,
    private readonly encryptPasswordRepository: EncryptPasswordRepository
  ){}

  async load(data: any): Promise<Boolean> {

    const user_exists = await this.userExistsRepository.exists(data.id_user)

    if (!user_exists) throw new NotFoundError('User');

    const login_validation = await this.getUserByLoginRepository.getByLogin(data.login);

    data.password = await this.encryptPasswordRepository.encrypt(data.password)  

    if(login_validation && user_exists.login !== data.login) throw new AlreadyExistsError('login')

    const updated_user = await this.updateUserRepository.update(data);

    if(!updated_user) throw new Error('Erro ao atualizar usuário')

    return updated_user ? true : false 
  }
}