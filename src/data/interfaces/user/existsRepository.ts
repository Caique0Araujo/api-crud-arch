import { User } from "../../dto/user";

export interface UserExistsRepository{
  exists(id: number): Promise<User>;
}