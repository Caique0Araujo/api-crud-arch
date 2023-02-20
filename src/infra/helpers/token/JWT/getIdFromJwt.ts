import  jwt  from 'jsonwebtoken';
import { promisify } from 'util';
import env  from "dotenv";
import { GetIdFromTokenRepository } from "../../../../data/interfaces/user/getIdFromTokenRepository";

env.config();

export class GetIdFromTokenRepositoryJWT implements GetIdFromTokenRepository{

  async getId(req_token: string): Promise<number> {
      const [, token] = req_token.split(' ');
      const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
      if(!decoded) throw new Error('Internal Error')
      return decoded.id;
  }
}
