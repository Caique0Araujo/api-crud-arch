import { AlreadyExistsError } from "../../../domain/errors/AlreadyExists";
import { InvalidFieldError } from "../../../domain/errors/InvalidField";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { CreateUserUseCase } from "../../../domain/useCases/user/create";
import { Controller } from "../controller";
import { badRequest, created, defaultError, HttpResponse, notFound, serverError } from "../http";

export class CreateUserController implements Controller {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase
  ){}

  async handle(data: any): Promise<HttpResponse<any>> {
      try {
        const user = await this.createUserUseCase.load(data.content);
        return created(user);
      } catch (error) {
        if(!error.status) error.status = 500
        return defaultError(error)
      }
  }
}