import path from 'path';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
  },
  apis: [path.resolve(__dirname, './swagger/*.ts')],
};

export default swaggerOptions;