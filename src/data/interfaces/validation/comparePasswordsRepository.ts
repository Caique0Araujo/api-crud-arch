
import { User } from "../../dto/user";

export interface ComparePasswordsRepository{
  compare(password: string, secondPassword: string): Promise<Boolean>;
}