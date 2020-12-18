import * as mongoose from 'mongoose';

export const AttendanceSchema = new mongoose.Schema({
  fullName: { type: String },
  nickName: { type: String },
  department: { type: String },
  sickLeave: { type: Number },
  permissonLeave: { type: Number },
  alpha: { type: Number },
  totalAttendance: { type: Number },
  created_at: Date
});