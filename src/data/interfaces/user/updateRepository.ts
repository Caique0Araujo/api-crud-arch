import { User } from "../../dto/user";

export interface UpdateUserRepository{
  update(user: User): Promise<Boolean>;
}