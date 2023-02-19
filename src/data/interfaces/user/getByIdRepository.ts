import { User } from "../../dto/user";

export interface GetUserByIdRepository{
  getById(id: number): Promise<User>;
}