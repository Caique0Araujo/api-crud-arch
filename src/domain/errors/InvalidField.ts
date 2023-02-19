export class InvalidFieldError extends Error{
    status: number;
    constructor(){
        super('Invalid fields');
        this.name = 'InvalidFieldError';
        this.status = 400
    }
}