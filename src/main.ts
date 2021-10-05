import * as cors from 'cors';
import * as morgan from 'morgan';
import * as express from 'express';

import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }

  private routes() {
    this.express.use(routes);
  }
}

export default new App().express;
