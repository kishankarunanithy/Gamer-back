import { sequelize } from "./connection.js";
import { Model, DataTypes } from "sequelize";

export class Submission extends Model {};

Submission.init (
  {
    video_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    tableName: 'submission'
  }
);