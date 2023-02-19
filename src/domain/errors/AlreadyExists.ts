export class AlreadyExistsError extends Error{
  status: number;
  constructor(name: string){
      super(`This ${name} already exists`);
      this.name = 'AlreadyExistsError';
      this.status = 400
  }
}