import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      const token = await this.authService.authenticate(username, password);
      if (!token) {
        res.render('auth/login', { error: 'Invalid username or password' });
        return;
      }
      res.cookie('token', token, { httpOnly: true });
      res.redirect('/');
    } catch (error) {
      next(error);
    }
  }

  public logout(req: Request, res: Response) {
    res.clearCookie('token');
    res.redirect('/');
  }
}
