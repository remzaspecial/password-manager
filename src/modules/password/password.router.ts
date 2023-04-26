import { Router } from 'express';
import { PasswordController } from './password.controller';

const passwordRouter = Router();
const passwordController = new PasswordController();

passwordRouter.get('/', passwordController.getPasswords);
passwordRouter.post('/', passwordController.createPassword);
passwordRouter.get('/:id', passwordController.getPasswordById);
passwordRouter.patch('/:id', passwordController.updatePassword);
passwordRouter.delete('/:id', passwordController.deletePassword);

export default passwordRouter;
