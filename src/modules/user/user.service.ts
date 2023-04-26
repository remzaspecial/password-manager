import User, { IUser, ICreateUser } from '../../models/user';
import { PasswordHelper } from '../../utils/password.helper';

export class UserService {
  public async getUsers(): Promise<IUser[]> {
    return User.find({});
  }

  public async createUser(newUser: ICreateUser): Promise<IUser> {
    const { username, password } = newUser;
    const passwordSalt = await PasswordHelper.generatePasswordSalt();
    const passwordHash = await PasswordHelper.generatePasswordHash(password, passwordSalt);

    return User.create({
      username,
      passwordSalt,
      passwordHash,
    });
  }

  public async getUserById(id: string): Promise<IUser> {
    const user = await User.findById(id).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  public async updateUser(id: string, updatedUser: IUser): Promise<IUser | null> {
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }
  
  public async deleteUser(id: string): Promise<IUser> {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
    return user;
  }
}
