import { EncryptPasswordRepository } from './../../../../data/interfaces/encryptation/encryptPasswordRepository';
import { CreateUserService } from "../../../../data/services/user/create";
import { CreateUserRepositorySequelize } from "../../../../infra/repositories/sequelize/user/create";
import { LoginValidationRepositorySequelize } from "../../../../infra/repositories/sequelize/validation/login";
import { Controller } from "../../../../presentation/controllers/controller";
import { CreateUserController } from "../../../../presentation/controllers/user/create";
import { EncryptPasswordRepositoryBcrypt } from '../../../../helpers/encryption/encrypt';

export const createUserController = (): Controller => {
  const userRpository = new CreateUserRepositorySequelize();
  const validationRepository = new LoginValidationRepositorySequelize();
  const encryptPasswordRepository = new EncryptPasswordRepositoryBcrypt();
  const service = new CreateUserService(userRpository, validationRepository, encryptPasswordRepository);
  return new CreateUserController(service);
}