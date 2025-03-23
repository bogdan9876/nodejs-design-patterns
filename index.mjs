import express from 'express';
import router from './router.js';
import db from './models/index.js';

const app = express()

app.use(express.json())
app.use('/api', router)

const startApp = () => {
 db.sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log("Server running on port 5000")
    });
});
}

startApp();