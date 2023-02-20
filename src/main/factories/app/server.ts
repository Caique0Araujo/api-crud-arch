import {ExpressApplication} from "../../app/ExpressApplication"
import { Application } from "../../app/Application";
import { serverConfiguration } from "../../config/server";
import { ExpressRouter } from "../../routes/express-routes/router";
import SequelizeDatabase from "../../../database/sequelizeDatabase";

export const applicationFactory = (): Application=>{

    if(serverConfiguration.type === 'express'){
        return new ExpressApplication(new ExpressRouter(), new SequelizeDatabase());
    } else {
        throw Error('Framework web inválido')
    }

}