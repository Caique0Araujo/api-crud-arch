import { GetUserByIdService } from "../../../../data/services/user/getById";
import { GetUserByIdRepositorySequelize } from "../../../../infra/repositories/sequelize/user/getById";
import { GetUserByIdController } from "../../../../presentation/controllers/user/getById";
import { Controller } from "../../../../presentation/controllers/controller";

export const getUserByIdController = (): Controller => {
  const repository = new GetUserByIdRepositorySequelize();
  const service = new GetUserByIdService(repository);
  return new GetUserByIdController(service);
}