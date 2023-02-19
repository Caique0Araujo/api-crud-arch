import { User } from "../../entities/user";

export interface DeleteUserUseCase{
  load(id: number): Promise<Boolean>;
}