import mongoose, { Schema, Document } from 'mongoose';

export interface ICreateUser{
    username: string,
    password: string
}

export interface IUser extends Document {
  username: string;
  passwordHash: string;
  passwordSalt: string;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
