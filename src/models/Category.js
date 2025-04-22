import { sequelize } from "./connection";
import { Model, DataTypes } from sequelize
import { types } from "joi";

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