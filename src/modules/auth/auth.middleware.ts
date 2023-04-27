import { Request, Response, NextFunction } from 'express';

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const token: string | undefined = req.cookies.token;
  if (!token) {
    res.redirect('/auth/login');
    return;
  }
  // TODO: Verify JWT token

  next();
}
