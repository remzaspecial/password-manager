import express from 'express';
import { PasswordController } from './password.controller';

const passwordRouter = express.Router();
const passwordController = new PasswordController();

passwordRouter.get('/', passwordController.getPasswords.bind(passwordController));
passwordRouter.post('/', passwordController.createPassword.bind(passwordController));
passwordRouter.get('/:id', passwordController.getPasswordById.bind(passwordController));
passwordRouter.patch('/:id', passwordController.updatePassword.bind(passwordController));
passwordRouter.delete('/:id', passwordController.deletePassword.bind(passwordController));

export default passwordRouter;
