import { User } from "../../../domain/entities/user";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { GetUsersUseCase } from "../../../domain/useCases/user/getAll";
import { GetUsersRepository } from "../../interfaces/user/getAllRepository";

export class GetUsersService implements GetUsersUseCase {
  constructor(
    private readonly getUsersRepository: GetUsersRepository
  ){}

  async load(): Promise<User[]> {

      const users = await this.getUsersRepository.getAll();

      if(!users) throw new NotFoundError('Users');

      return users 
  }
}