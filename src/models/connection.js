import "dotenv/config"
import { Sequelize } from 'sequelize';
console.log("ENV :", process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === 'production';
console.log("Connecting to:", process.env.DB_URL);

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  dialectOptions: isProduction 
   ? {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }
    : false,
});

export { sequelize };
