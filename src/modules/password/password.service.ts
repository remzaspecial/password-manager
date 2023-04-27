import Password, { IPassword } from '../../models/password';
import { PasswordHelper } from '../../utils/password.helper';
import { ICreatePasswordRequest } from './password.interface';

export class PasswordService {
  public async getPasswords(userId: string): Promise<IPassword[]> {
    return Password.find({ userId }).populate('userId');
  }

  public async createPassword(password: ICreatePasswordRequest): Promise<IPassword> {
    const createdPassword = new Password(password)
    return createdPassword.save();
  }

  public async getPasswordById(id: string): Promise<IPassword | null> {
    return Password.findById(id).populate('userId');
  }

  public async updatePassword(id: string, updatedPassword: IPassword): Promise<IPassword | null> {
    return Password.findByIdAndUpdate(id, updatedPassword, { new: true });
  }

  public async deletePassword(id: string): Promise<IPassword | null> {
    return Password.findByIdAndDelete(id);
  }
}
