export class NotFoundError extends Error {

    status: number;

    constructor(name: string){
        super(`${name} not found`);
        this.name = 'NotFoundError';
        this.status = 404
    }
}