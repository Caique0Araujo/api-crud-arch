import { User } from "../../../../data/dto/user";
import { GetUsersRepository } from "../../../../data/interfaces/user/getAllRepository";
import Users from "../../../dataSource/sequelize/user";

export class GetUsersRepositorySequelize implements GetUsersRepository {
  async getAll(): Promise<User[]> {
      return await Users.findAll(
        {
          raw: true,
          where: {is_enabled: true},
          attributes: ['id_user', 'name', 'login'],
        }
      );
  }
}