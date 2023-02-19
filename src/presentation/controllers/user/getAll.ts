import { serverError, ok, HttpResponse, defaultError} from "../http";
import { Controller } from "../controller";
import { GetUsersUseCase } from "../../../domain/useCases/user/getAll";


export class GetUsersController implements Controller {
  constructor(
    private readonly getUsersUseCase: GetUsersUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const users = await this.getUsersUseCase.load();
        return ok(users)
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)

      }
  }
}