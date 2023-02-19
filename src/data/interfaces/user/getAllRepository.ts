import { User } from "../../dto/user";

export interface GetUsersRepository{
  getAll(): Promise<User[]>;
}