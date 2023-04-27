import express from 'express';
import { AuthController } from './auth.controller';

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post('/login', authController.login.bind(authController));
authRouter.get('/logout', authController.logout.bind(authController));

export default authRouter;
