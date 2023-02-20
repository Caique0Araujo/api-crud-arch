import { GetIdFromTokenService } from './../../../../data/services/user/getIdFromToken';
import { GetIdFromTokenRepositoryJWT } from './../../../../infra/helpers/token/JWT/getIdFromJwt';
import { GetUserByIdService } from "../../../../data/services/user/getById";
import { GetUserByIdRepositorySequelize } from "../../../../infra/repositories/sequelize/user/getById";
import { GetUserByIdController } from "../../../../presentation/controllers/user/getById";
import { Controller } from "../../../../presentation/controllers/controller";
import { GetUserByTokenController } from "../../../../presentation/controllers/user/getByToken";

export const getUserByTokenController = (): Controller => {
  const repository = new GetUserByIdRepositorySequelize();
  const getIdFromTokenRepositoryJWT = new GetIdFromTokenRepositoryJWT();
  const getIdFromTokenService = new GetIdFromTokenService(getIdFromTokenRepositoryJWT)
  const service = new GetUserByIdService(repository);
  return new GetUserByTokenController(service, getIdFromTokenService);
}