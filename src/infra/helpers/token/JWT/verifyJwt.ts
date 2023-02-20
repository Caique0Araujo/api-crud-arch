import jwt from 'jsonwebtoken';
import { promisify } from "util";



export const verifyJwtToken = async (token: string) =>{
    return await promisify(jwt.verify)(token, process.env.JWT_SECRET);

}