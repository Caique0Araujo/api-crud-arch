import { User } from "../../entities/user";

export interface CreateUserUseCase{
  load(user: User): Promise<User>;
}