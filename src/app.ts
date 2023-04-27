import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';
import config from './config/config';

import userRouter from './modules/user/user.router';
import passwordRouter from './modules/password/password.router';
import authRouter from './modules/auth/auth.router';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.connectToDB();
  }

  private config() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes() {
    this.app.use('/api/auth', authRouter);
    this.app.use('/api/passwords', passwordRouter);
    this.app.use('/api/users', userRouter);
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      const error = new Error('Not found');
      res.status(404).json({ message: error.message });
    });
  }

  private async connectToDB() {
    try {
      await mongoose.connect(config.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
      } as ConnectOptions);
      console.log('Connected to the database');
    } catch (error) {
      console.error(error);
    }
  }
}

export default new App().app;
