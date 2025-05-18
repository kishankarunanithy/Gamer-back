import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection.js"; 

export class PasswordReset extends Model {}

PasswordReset.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    expireAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'expires_at'
    },
    used: {
      type: DataTypes.BOOLEAN,
      defaultValue: flase
    }
  },
  {
    sequelize,
    tableName: "password_resets",
  }
);