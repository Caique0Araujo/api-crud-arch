import env  from "dotenv";
import { verifyJwtToken } from '../../helpers/token/verifyJwt';

env.config();

export const authenticateRoute = async (req: any, res: any, next: any) =>{

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ error: 'Token is missing' });
    }

    const [, token] = authHeader.split(' ');

    try {

        const decoded = await verifyJwtToken(token);

        if(!decoded){
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.userId = decoded.id;

        return next();

    } catch (error) {
        return res.status(401).json({ error: 'Authentication error' });
    }

}