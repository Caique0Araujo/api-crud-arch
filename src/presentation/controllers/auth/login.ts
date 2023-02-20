import { LoginUseCase } from "../../../domain/useCases/user/login";
import { generateJwtToken } from "../../../infra/helpers/token/JWT/generateJwt";
import { expireDate } from "../../../main/config/jwt";
import { Controller } from "../controller";
import { badRequest, HttpResponse, login } from "../http";

export class LoginController implements Controller {
  constructor(
    private readonly loginUseCase: LoginUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const user = await this.loginUseCase.load(data.content);
        const token = await generateJwtToken(user.id_user);
        const current = new Date();
        const expire_date_UTC = new Date(current.getTime() + expireDate._in_milliseconds);
        return login(user, token, expire_date_UTC);
      } catch (error) {
        return badRequest(error)
      }
  }
}