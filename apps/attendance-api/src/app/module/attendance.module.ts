import { Module } from '@nestjs/common';

import { AttendanceController } from '../controllers/attendance.controller';
import { AttendanceService } from '../services/attendance.service';
import { AttendanceSchema } from '../repository/attendance.repository';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Attendance', schema: AttendanceSchema}])
  ],
  providers:[AttendanceService],
  controllers: [AttendanceController]
})
export class AttendanceModule {}
