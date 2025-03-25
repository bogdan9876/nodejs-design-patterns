import express from 'express';
import sequelize from './config/sequelize';
import router from './config/router';
import DataRouter from './routes/DataRouter';

const app = express();
app.use(express.json());
app.use('/api', router)
app.use('/data', DataRouter);

const startApp = async () => {
    try {
        await sequelize.sync();
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    } catch (error) {
        console.error("Error starting the app:", error);
    }
};

startApp();
