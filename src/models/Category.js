import { sequelize } from "./connection.js";
import { Model, DataTypes } from "sequelize";

export class Category extends Model {}

Category.init(
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
        tableName: 'category'
    }
);