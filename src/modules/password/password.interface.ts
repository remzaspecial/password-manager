export interface ICreatePasswordRequest {
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
