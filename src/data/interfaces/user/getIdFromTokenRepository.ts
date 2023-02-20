export interface GetIdFromTokenRepository{
  getId(token: string): Promise<number>;
}