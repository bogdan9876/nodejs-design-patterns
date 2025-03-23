require('reflect-metadata');
const express = require('express');
const router = require('./router.js');
const db = require('./models');

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