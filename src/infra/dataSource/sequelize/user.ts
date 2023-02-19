import { DataTypes } from "sequelize";
import { databaseFactory } from "../../../database/databaseFactory";


const sequelize = databaseFactory().getConnection();

const User = sequelize.define("user", {
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  is_enabled: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }

},  {timestamps: false})

export default User;