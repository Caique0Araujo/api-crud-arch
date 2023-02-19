export class InternalServerError extends Error{
  status: number;
  constructor(error: string){
      super(`Internal Server Error: ${error}`);
      this.name = 'InternalServerError';
      this.status = 500
  }
}