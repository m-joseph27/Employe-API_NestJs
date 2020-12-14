import * as mongoose from 'mongoose';

export const EmployeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  nickName: { type: String },
  age: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
  gender: { type: String, required: true },
  department: { type: String, required: true },
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