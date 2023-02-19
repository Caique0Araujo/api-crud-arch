import { UserExistsRepositorySequelize } from './../../../../infra/repositories/sequelize/user/exists';
import { DeleteUserService } from "../../../../data/services/user/delete";
import { DeleteUserRepositorySequelize } from "../../../../infra/repositories/sequelize/user/delete";
import { Controller } from "../../../../presentation/controllers/controller";
import { DeleteUserController } from "../../../../presentation/controllers/user/delete";

export const deleteUserController = (): Controller => {
  const deleteUserRepository = new DeleteUserRepositorySequelize();
  const userExistsRepository = new UserExistsRepositorySequelize();
  const service = new DeleteUserService(deleteUserRepository, userExistsRepository);
  return new DeleteUserController(service);
}