import { User } from "../../../domain/entities/user";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { GetUserByIdUseCase } from "../../../domain/useCases/user/getById";
import { GetUserByIdRepository } from "../../interfaces/user/getByIdRepository";

export class GetUserByIdService implements GetUserByIdUseCase {
  constructor(
    private readonly getUserByIdRepository: GetUserByIdRepository
  ){}
  async load(id: number): Promise<User> {

    const user_from_DB = await this.getUserByIdRepository.getById(id);

    if(!user_from_DB) throw new NotFoundError('User')

    return user_from_DB
  }
}