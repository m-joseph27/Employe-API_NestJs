/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { AttendanceService } from '../services/attendance.service';

@Controller('attendance')
export class AttendanceController {

  constructor(private attendanceService: AttendanceService) {}

  @Post('insertAttendance')
  async insertAttendance(
    @Body('fullName') fullName: string,
    @Body('nickName') nickName: string,
    @Body('department') department: string,
    @Body('sickLeave') sickLeave: number,
    @Body('permissionLeave') permissionLeave: number,
    @Body('alpha') alpha: number,
    @Body('totalAttendance') totalAttendance: number,
  ) {
    const created_at = new Date;
    const data = await this.attendanceService.insertAttendance(
      fullName,
      nickName,
      department,
      sickLeave,
      permissionLeave,
      alpha,
      30,
      created_at
    );

    return {
      message: 'Attendance has been created',
      data
    };
  }

  @Get('findAll')
  async getAllAttendance(@Req() req) {
    const attendances = await this.attendanceService.getAllAttendance(req.query);

    return attendances;
  }

  @Get(':id')
  async getAttendance(@Param('id') id: string) {
    const attendance = await this.attendanceService.getAttendance(id);

    return attendance;
  }

  @Put('edit/:id')
  async updateAttendance(
    @Param('id') id: string,
    @Body('fullname') fullName: string,
    @Body('nickname') nickName: string,
    @Body('department') department: string,
    @Body('sickLeave') sickLeave: number,
    @Body('permissionLeave') permissionLeave: number,
    @Body('alpha') alpha: number,
    @Body('totalAttendance') totalAttendance: number,
  ) {
    const updated_at = new Date;
    const data = await this.attendanceService.updateAttendance(
      id,
      fullName,
      nickName,
      department,
      sickLeave,
      permissionLeave,
      alpha,
      totalAttendance
    );

    return {
      message: 'Attendance succesfully updated',
      data,
      updated_at
    }
  }

  @Delete(':id')
  async deleteAttendance(@Param('id') id:string) {
    const attendance = await this.attendanceService.deleteAttendance(id);

    return{
      message: 'Attendance succesfully deleted',
      attendance
    };
  }

}
