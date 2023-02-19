import { User } from "../../../domain/entities/user";
import { LoginUseCase } from "../../../domain/useCases/user/login";
import { InvalidFieldError } from '../../../domain/errors/InvalidField';
import { GetUserByLoginRepository } from "../../interfaces/user/getByLoginRepository";
import { ComparePasswordsRepository } from "../../interfaces/validation/comparePasswordsRepository";

export class LoginService implements LoginUseCase {
  constructor(
    private readonly getUserByLoginRepository: GetUserByLoginRepository,
    private readonly comparePasswordsRepository: ComparePasswordsRepository
  ){}

  async load(data: any): Promise<User> {

    const user_from_DB = await this.getUserByLoginRepository.getByLogin(data.login);

    if(!user_from_DB) throw new InvalidFieldError();

    if(await this.comparePasswordsRepository.compare(user_from_DB.password, data.password)) throw new InvalidFieldError(); 

    return user_from_DB;

  }
}