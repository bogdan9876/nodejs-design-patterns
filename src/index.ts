import express from 'express';
import sequelize from './config/sequelize';
import router from './config/router';
import DataRouter from './routes/DataRouter';
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api', router);
app.use('/data', DataRouter);

const startApp = async () => {
    try {
        await (await sequelize).sync();
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    } catch (error) {
        console.error("Error starting the app:", error);
    }
};

startApp();
