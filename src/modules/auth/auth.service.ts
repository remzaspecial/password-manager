import { IUser } from '../../models/user';
import { UserService } from '../user/user.service';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

export class AuthService {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async authenticate(username: string, password: string): Promise<string | null> {
    const user: IUser | null = await this.userService.getUserByUsername(username);
    if (!user) {
      return null;
    }

    const isPasswordValid: boolean = await this.userService.verifyUserPassword(user, password);
    if (!isPasswordValid) {
      return null;
    }

    const token = jwt.sign({ userId: user.id }, config.SECRET_TOKEN, {
      expiresIn: '1h',
    });
    return token;
  }
}
