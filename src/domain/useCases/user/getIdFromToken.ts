export interface GetIdFromTokenUseCase{
  load(token: string): Promise<number>;
}