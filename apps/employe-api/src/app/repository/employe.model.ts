import * as mongoose from 'mongoose';

export const EmployeSchema = new mongoose.Schema({
  fullName: { type: String },
  nickName: { type: String },
  age: { type: Number },
  phoneNumber: { type: Number },
  gender: { type: String },
  department: { type: String },
  created_at: Date
});

export interface Employe extends mongoose.Document {
  id: string;
  fullName: string;
  nickName: string;
  age: number;
  phoneNumber: number;
  gender: string;
  department: string;
  created_at: Date;
}