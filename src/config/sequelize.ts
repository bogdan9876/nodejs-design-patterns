import { Sequelize } from 'sequelize-typescript';
import mysql from 'mysql2/promise';
import path from 'path';

const DB_NAME = 'patterns_db';
const DB_USER = 'root';
const DB_PASSWORD = 'bogda765';
const DB_HOST = '127.0.0.1';

const createDatabaseIfNotExists = async () => {
    try {
        const connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        console.log(`Database is ready.`);
        await connection.end();
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
};

const initializeSequelize = async () => {
    await createDatabaseIfNotExists();

    const sequelize = new Sequelize({
        database: DB_NAME,
        dialect: 'mysql',
        host: DB_HOST,
        username: DB_USER,
        password: DB_PASSWORD,
        models: [path.resolve(__dirname, '../models')],
    });

    try {
        await sequelize.authenticate();
    } catch (error) {
      console.log(error)
    }

    return sequelize;
};

export default initializeSequelize();
