import env  from "dotenv";
import { verifyJwtToken } from '../../helpers/token/verifyJwt';

env.config();

export const getIdFromToken = async (req_token) =>{

  const [, token] = req_token.split(' ');

  const decoded = await verifyJwtToken(token);
  if(!decoded) throw new Error('Internal Error')

  return decoded.id;

}