import { GetIdFromTokenUseCase } from './../../../domain/useCases/user/getIdFromToken';
import { GetUserByIdUseCase } from "../../../domain/useCases/user/getById";
import { Controller } from "../controller";
import { HttpResponse, defaultError, ok } from "../http";

export class GetUserByTokenController implements Controller {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly getIdFromTokenUseCase: GetIdFromTokenUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const id = await this.getIdFromTokenUseCase.load(data.token)
        console.log(id);
        const user = await this.getUserByIdUseCase.load(id);
        return ok (user);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error);
      }
  }
}