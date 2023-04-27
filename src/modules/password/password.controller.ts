import { Request, Response, NextFunction } from 'express';
import Password from '../../models/password';
import { PasswordService } from './password.service';

export class PasswordController {
  private passwordService: PasswordService;

  constructor() {
    this.passwordService = new PasswordService();
  }

  public async getPasswords(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.query.userId as string;
      const passwords = await this.passwordService.getPasswords(userId);
      res.status(200).json(passwords);
    } catch (error) {
      next(error);
    }
  }

  public async createPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const password = req.body;
      const createdPassword = await this.passwordService.createPassword(password);
      res.status(201).json(createdPassword);
    } catch (error) {
      next(error);
    }
  }

  public async getPasswordById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      console.log({ id });
      const password = await this.passwordService.getPasswordById(id);
      res.status(200).json(password);
    } catch (error) {
      next(error);
    }
  }

  public async updatePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const password = new Password(req.body);
      const updatedPassword = await this.passwordService.updatePassword(id, password);
      res.status(200).json(updatedPassword);
    } catch (error) {
      next(error);
    }
  }

  public async deletePassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deletedPassword = await this.passwordService.deletePassword(id);
      res.status(200).json(deletedPassword);
    } catch (error) {
      next(error);
    }
  }
}
