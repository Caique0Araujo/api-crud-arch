import { GetUserByLoginRepositorySequelize } from './../../../../infra/repositories/sequelize/user/getByLogin';
import { LoginService } from "../../../../data/services/user/login";
import { LoginController } from "../../../../presentation/controllers/auth/login";
import { Controller } from "../../../../presentation/controllers/controller";
import { ComparePasswordsRepositoryBcrypt } from '../../../../infra/helpers/encryption/bcrypt/compare';

export const loginController = ():Controller => {
  const getUserRepository = new GetUserByLoginRepositorySequelize();
  const comparePasswordsRepository = new ComparePasswordsRepositoryBcrypt();
  const service = new LoginService(getUserRepository, comparePasswordsRepository);
  return new LoginController(service);
}