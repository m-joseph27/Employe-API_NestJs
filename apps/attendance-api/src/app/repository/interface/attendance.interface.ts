import * as mongoose from 'mongoose';


export interface Attendance extends mongoose.Document {
  id: string;
  fullName: string;
  nickName: string;
  department: string;
  sickLeave: number;
  permissonLeave: number;
  alpha: number;
  totalAttendance: number;
  created_at: Date;
}