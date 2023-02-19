import { User } from "../../entities/user";

export interface GetUsersUseCase{
    load(): Promise<User[]>
}