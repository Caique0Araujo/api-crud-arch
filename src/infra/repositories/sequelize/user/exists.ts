import { User } from "../../../../data/dto/user";
import { UserExistsRepository } from "../../../../data/interfaces/user/existsRepository";
import Users from "../../../dataSource/sequelize/user"

export class UserExistsRepositorySequelize implements UserExistsRepository{

    async exists(id: number): Promise<User> {
        const user = await Users.findOne({
            raw: true,
            where: {id_user: id, is_enabled: true}
          })
        return user ? user : null
    }
}