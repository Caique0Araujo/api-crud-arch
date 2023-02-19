import { User } from "../../../../data/dto/user";
import { GetUserByIdRepository } from "../../../../data/interfaces/user/getByIdRepository";
import user from '../../../dataSource/sequelize/user';

export class GetUserByIdRepositorySequelize implements GetUserByIdRepository{
  async getById(id: number): Promise<User> {
      return await user.findOne({
        raw: true,
        where: {id_user: id, is_enabled: true},
        attributes: ['id_user', 'name', 'login', 'password']
      });
  }
}