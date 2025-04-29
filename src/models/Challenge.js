import { Model, DataTypes } from "sequelize";
import { sequelize } from "./connection.js";

export class Challenge extends Model {};

Challenge.init(
    {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        video_url: {
            type: DataTypes.TEXT,
            allowNull: false,
        }   
    }, {
        sequelize,
        tableName: "challenge",
    }
)