import { EncryptPasswordRepository } from './../../interfaces/encryptation/encryptPasswordRepository';
import { LoginValidationRepository } from './../../interfaces/validation/loginRepository';
import { User } from "../../../domain/entities/user";
import { AlreadyExistsError } from "../../../domain/errors/AlreadyExists";
import { CreateUserUseCase } from "../../../domain/useCases/user/create";
import { CreateUserRepository } from "../../interfaces/user/createRepository";

export class CreateUserService implements CreateUserUseCase {
  constructor(
    private readonly createUserRespository: CreateUserRepository,
    private readonly loginValidationRepository: LoginValidationRepository,
    private readonly encryptPasswordRepository: EncryptPasswordRepository

  ){}
  async load(user: User): Promise<User> {

      if(await this.loginValidationRepository.validate(user.login)) throw new AlreadyExistsError('login');

      user.password = await this.encryptPasswordRepository.encrypt(user.password); 

      return await this.createUserRespository.create(user);
  }
}