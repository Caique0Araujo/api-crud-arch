import { DeleteUserRepository } from "../../../../data/interfaces/user/deleteRepository";
import { NotFoundError } from "../../../../domain/errors/NotFoundError";
import User from "../../../dataSource/sequelize/user";

export class DeleteUserRepositorySequelize implements DeleteUserRepository {
  async delete(id: any): Promise<Boolean> {
    return await User.update({is_enabled: 0}, {where: {id_user: id}}) ? true : false
  }
}