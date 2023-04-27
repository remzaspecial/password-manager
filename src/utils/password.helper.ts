import bcrypt from "bcrypt";

export class PasswordHelper {
  public static async generatePasswordHash(
    password: string,
    salt: string
  ): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  public static async generatePasswordSalt(): Promise<string> {
    return bcrypt.genSalt();
  }
}
