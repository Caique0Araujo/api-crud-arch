import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { DeleteUserUseCase } from "../../../domain/useCases/user/delete";
import { GetIdFromTokenUseCase } from "../../../domain/useCases/user/getIdFromToken";
import { Controller } from "../controller";
import { defaultError, HttpResponse, deleted } from "../http";

export class DeleteUserController implements Controller {
  constructor(
    private readonly deleteUserUseCase: DeleteUserUseCase,
    private readonly getIdFromTokenUseCase: GetIdFromTokenUseCase,
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const id_token = await this.getIdFromTokenUseCase.load(data.token);
        data.content.logged_id = id_token;
        const user_deleted = await this.deleteUserUseCase.load(data.content);

        return user_deleted ? deleted(user_deleted) : defaultError(new NotFoundError('user'))
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}