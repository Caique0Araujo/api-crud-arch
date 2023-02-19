import { User } from "../../dto/user";

export interface GetUserByLoginRepository{
  getByLogin(login: string): Promise<User>;
}