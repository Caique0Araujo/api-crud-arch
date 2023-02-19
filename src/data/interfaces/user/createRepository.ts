import { User } from "../../dto/user";

export interface CreateUserRepository{
  create(user: User): Promise<User>;
}