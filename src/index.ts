import * as express from 'express';
import { Request, Response } from 'express';
import * as createMiddleware from 'swagger-express-middleware';
import { SwaggerMiddleware } from 'swagger-express-middleware';
import { database } from './lib/database';
import { router } from './routers';

const app = express();
const { PORT = 3000 } = process.env;

createMiddleware('config/swagger.json', app, (err, middleware: SwaggerMiddleware) => {
  if (err) {
    console.error(err);
  }

  app.use(
    middleware.metadata(),
    middleware.CORS(),
    middleware.parseRequest(),
    middleware.validateRequest()
  );

  app.get('/', async (req: Request, res: Response) => {
    res.json({
      message: 'hello world',
    });
  });


  app.use(router);
  
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
});