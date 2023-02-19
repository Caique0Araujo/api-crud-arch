export interface DeleteUserRepository{
  delete(id: number): Promise<Boolean>;
}