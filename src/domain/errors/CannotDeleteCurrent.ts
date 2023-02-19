export class CannotDeleteCurrentError extends Error{
  status: number;
  constructor(name: string){
      super(`Cannot delete current ${name}`);
      this.name = 'CannotDeleteCurrentError';
      this.status = 400
  }
}