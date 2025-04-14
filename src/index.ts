import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import useragent from 'useragent';
import swaggerOptions from './config/swagger';
import sequelize from './config/sequelize';
import router from './config/router';
import methodOverride from 'method-override';
import DataRouter from './routes/DataRouter';
import path from 'path';

const app = express();
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride((req: any) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method
      console.log(method,req.body._method)
      delete req.body._method
      return method
    }
  }))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/api', router);

const blockBrowserMiddleware: any = (req: Request, res: Response, next: NextFunction) => {
  const agent = useragent.parse(req.headers['user-agent'] || '');

  if (agent.family !== 'Other') {
    return res.status(403).send('Access denied from browser');
  }

  next();
};

app.use('/data', blockBrowserMiddleware, DataRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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