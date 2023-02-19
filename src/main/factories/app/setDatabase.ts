import { Application } from "../../app/Application";
import { serverConfiguration } from "../../config/server";
import { Database } from "../../../database/database";
import SequelizeDatabase from "../../../database/sequelizeDatabase";

export const databaseFactory = (): Database=>{
    if(serverConfiguration.database === 'sequelize'){
        const database = new SequelizeDatabase();
        database.init();
        return database;
    }else{
        return null;
    }

}