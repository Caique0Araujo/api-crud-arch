import { GetIdFromTokenUseCase } from "../../../domain/useCases/user/getIdFromToken";
import { GetIdFromTokenRepository } from "../../interfaces/user/getIdFromTokenRepository";


export class GetIdFromTokenService implements GetIdFromTokenUseCase {
  constructor(
    private readonly getIdFromTokenRepository: GetIdFromTokenRepository
  ){}
  async load(token: string): Promise<number> {
    return this.getIdFromTokenRepository.getId(token);
    
  }
}