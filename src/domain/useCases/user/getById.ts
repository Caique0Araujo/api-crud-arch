import { User } from "../../entities/user";

export interface GetUserByIdUseCase{
  load(id: number): Promise<User>;
}