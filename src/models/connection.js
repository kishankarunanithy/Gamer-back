import "dotenv/config"
import { Sequelize } from 'sequelize';
console.log("ENV :", process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === 'production';

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
