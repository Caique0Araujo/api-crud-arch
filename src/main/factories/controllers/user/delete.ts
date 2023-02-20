import { GetIdFromTokenRepositoryJWT } from './../../../../infra/helpers/token/JWT/getIdFromJwt';
import { UserExistsRepositorySequelize } from './../../../../infra/repositories/sequelize/user/exists';
import { DeleteUserService } from "../../../../data/services/user/delete";
import { DeleteUserRepositorySequelize } from "../../../../infra/repositories/sequelize/user/delete";
import { Controller } from "../../../../presentation/controllers/controller";
import { DeleteUserController } from "../../../../presentation/controllers/user/delete";
import { GetIdFromTokenService } from '../../../../data/services/user/getIdFromToken';

export const deleteUserController = (): Controller => {
  const deleteUserRepository = new DeleteUserRepositorySequelize();
  const userExistsRepository = new UserExistsRepositorySequelize();
  const getIdFromTokenRepositoryJWT = new GetIdFromTokenRepositoryJWT();
  const deleteUserService = new DeleteUserService(deleteUserRepository, userExistsRepository);
  const getIdFromTokenService = new GetIdFromTokenService(getIdFromTokenRepositoryJWT);
  return new DeleteUserController(deleteUserService, getIdFromTokenService);
}