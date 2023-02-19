import { User } from "../../dto/user";

export interface LoginValidationRepository{
  validate(login: string): Promise<Boolean>;
}