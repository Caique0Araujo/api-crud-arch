import {ExpressApplication} from "../../app/ExpressApplication"
import { Application } from "../../app/Application";
import { serverConfiguration } from "../../config/server";
import { ExpressRouter } from "../../routes/express-routes/router";
import SequelizeDatabase from "../../../database/sequelizeDatabase";
import { ExpressMiddlewares } from "../../middlewares/expressMiddlewares";

export const applicationFactory = (): Application=>{

    if(serverConfiguration.type === 'express'){
        if(serverConfiguration.database === 'sequelize')
            return new ExpressApplication(new ExpressRouter(), new SequelizeDatabase(), new ExpressMiddlewares());
    } else {
        throw Error('Framework web inválido')
    }
}