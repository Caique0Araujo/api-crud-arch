import { CannotDeleteCurrentError } from "../../../domain/errors/CannotDeleteCurrent";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { DeleteUserUseCase } from "../../../domain/useCases/user/delete";
import { DeleteUserRepository } from "../../interfaces/user/deleteRepository";
import { UserExistsRepository } from "../../interfaces/user/existsRepository";

export class DeleteUserService implements DeleteUserUseCase {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepository,
    private readonly userExistsRepository: UserExistsRepository
  ){}

  async load(data: any): Promise<Boolean> {

    console.log(data)

    if(data.id == data.logged_id) throw new CannotDeleteCurrentError('user')

    const user_exists = await this.userExistsRepository.exists(data.id)

    if (!user_exists) throw new NotFoundError('User');
  
    return await this.deleteUserRepository.delete(data.id);
  }
}