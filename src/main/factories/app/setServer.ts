import {ExpressApplication} from "../../app/ExpressApplication"
import { Application } from "../../app/Application";
import { serverConfiguration } from "../../config/server";

export const applicationFactory = (): Application=>{

    if(serverConfiguration.type === 'express'){
        return new ExpressApplication();
    } else {
        throw Error('Framework web inválido')
    }

}