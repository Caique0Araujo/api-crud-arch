import { Controller } from "../../../../presentation/controllers/controller";
import { GetUsersRepositorySequelize } from "../../../../infra/repositories/sequelize/user/getAll";
import { GetUsersService } from "../../../../data/services/user/getAll";
import { GetUsersController } from "../../../../presentation/controllers/user/getAll";

export const getUsersController = (): Controller => {
  const repository = new GetUsersRepositorySequelize();
  const service = new GetUsersService(repository);
  return new GetUsersController(service);
}