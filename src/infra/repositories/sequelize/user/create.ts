import { User } from "../../../../data/dto/user";
import { CreateUserRepository } from "../../../../data/interfaces/user/createRepository";
import user from '../../../dataSource/sequelize/user';

export class CreateUserRepositorySequelize implements CreateUserRepository{
  async create(newUser: User): Promise<User> {
    return await user.create(newUser);
  }
}