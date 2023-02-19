import { getIdFromToken } from './../../../helpers/token/getIdFromJwt';
import { GetUserByIdUseCase } from "../../../domain/useCases/user/getById";
import { Controller } from "../controller";
import { HttpResponse, defaultError, ok } from "../http";

export class GetUserByTokenController implements Controller {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const id = await getIdFromToken(data.token)
        console.log(id);
        const user = await this.getUserByIdUseCase.load(id);
        return ok (user);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error);
      }
  }
}