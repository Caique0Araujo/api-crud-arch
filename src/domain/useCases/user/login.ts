import { User } from "../../entities/user";

export interface LoginUseCase{
  load(data: any): Promise<User>;
}