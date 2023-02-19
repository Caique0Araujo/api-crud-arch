import { UpdateUserUseCase } from "../../../domain/useCases/user/update";
import { Controller } from "../controller";
import { defaultError, HttpResponse, serverError, updated } from "../http";

export class UpdateUserController implements Controller {
  constructor(
    private readonly updateUserUseCase: UpdateUserUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        await this.updateUserUseCase.load(data.content)
        return updated();
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}