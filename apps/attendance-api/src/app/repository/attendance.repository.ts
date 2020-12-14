import * as mongoose from 'mongoose';

export const AttendanceSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  nickName: { type: String, required: true },
  department: { type: String, required: true },
  sickLeave: { type: Number, required: true },
  permissonLeave: { type: Number, required: true },
  alpha: { type: Number, required: true },
  totalAttendance: { type: Number, required: true },
  created_at: Date
});