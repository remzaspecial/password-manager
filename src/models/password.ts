import mongoose, { Schema, Document } from 'mongoose';

export interface IPassword extends Document {
  userId: string;
  name: string;
  username: string;
  password: string;
  url?: string;
  note?: string;
  category?: string;
  tags?: string[];
  comment?: string;
}

const PasswordSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    url: { type: String },
    note: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    comment: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IPassword>('Password', PasswordSchema);
