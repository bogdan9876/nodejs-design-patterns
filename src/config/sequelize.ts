import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize({
  database: 'patterns_db',
  dialect: 'mysql',
  host: '127.0.0.1',
  username: 'root',
  password: 'bogda765',
  models: [path.resolve(__dirname, '../models')],
});

export default sequelize;
