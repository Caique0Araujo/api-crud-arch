import { GetUserByLoginRepository } from "../../../../data/interfaces/user/getByLoginRepository";
import { User } from "../../../../domain/entities/user";
import Users from '../../../dataSource/sequelize/user';

export class GetUserByLoginRepositorySequelize implements GetUserByLoginRepository {
  async getByLogin(login: string): Promise<User> {
    return await Users.findOne({
      raw: true,
      where: {login: login, is_enabled: true}
    })
  }
}