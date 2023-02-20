import { GetUserByLoginRepositorySequelize } from './../../../../infra/repositories/sequelize/user/getByLogin';
import { UpdateUserService } from "../../../../data/services/user/update";
import { EncryptPasswordRepositoryBcrypt } from "../../../../infra/helpers/encryption/bcrypt/encrypt";
import { UpdateUserRepositorySequelize } from "../../../../infra/repositories/sequelize/user/update";
import { Controller } from "../../../../presentation/controllers/controller";
import { UpdateUserController } from "../../../../presentation/controllers/user/update";
import { UserExistsRepositorySequelize } from '../../../../infra/repositories/sequelize/user/exists';

export const updateUsersController = (): Controller => {
  const updateUserRepository = new UpdateUserRepositorySequelize();
  const userExistsRepository = new UserExistsRepositorySequelize();
  const getUserByLoginRepositorySequelize = new GetUserByLoginRepositorySequelize();
  const encryptPasswordRepository = new EncryptPasswordRepositoryBcrypt();
  const service = new UpdateUserService(
    updateUserRepository, 
    userExistsRepository, 
    getUserByLoginRepositorySequelize, 
    encryptPasswordRepository
  );
  return new UpdateUserController(service);
}