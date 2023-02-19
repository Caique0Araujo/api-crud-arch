import { Response, Request } from "express";
import { Controller } from "../../../presentation/controllers/controller";

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
  }

export const adaptRoute = (controller: Controller) =>{
        return async (req: Request, res: Response) =>{
            const authHeader = req.headers.authorization;
            const data = {content: '', token: '', file: null}
            data.file = req.files ? req.files.file : null;
            data.content = Object.keys(req.body).length ? req.body : req.params
            data.token = authHeader ? authHeader : null
            const httpResponse = await controller.handle(data);
            res.status(httpResponse.status).json(httpResponse.body)
        }
    }
