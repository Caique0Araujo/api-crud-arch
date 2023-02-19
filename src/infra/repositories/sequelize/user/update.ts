import { User } from "../../../../data/dto/user";
import { UpdateUserRepository } from "../../../../data/interfaces/user/updateRepository";
import Users from "../../../dataSource/sequelize/user";

export class UpdateUserRepositorySequelize implements UpdateUserRepository {
  async update(user: User): Promise<Boolean> {
    return  await Users.update(user, {where: {id_user: user.id_user}})
  }
}