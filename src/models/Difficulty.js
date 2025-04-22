import { sequelize } from "./connection.js";
import { Model, DataTypes } from "sequelize";

export class Difficulty extends Model {}

Difficulty.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        color: {
            type: DataTypes.TEXT,
            defaultValue: '#ffffff',
        },
    },
    {
        sequelize,
        tableName: 'difficulty'
    }
);