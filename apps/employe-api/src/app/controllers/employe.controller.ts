import { Controller,
  Post,
  Get,
  Body,
  Param,
  Delete,
  Put,
  Req
} from '@nestjs/common';
import { EmployesService } from '../services/employe.service';

@Controller('employe')
export class EmployesController {

  constructor( private employeService: EmployesService ) {}

  @Post('addEmploye')
  async insertEmploye(
    @Body('fullName') fullname: string,
    @Body('nickName') nickName: string,
    @Body('age') age: number,
    @Body('phoneNumber') phoneNumber: number,
    @Body('gender') gender: string,
    @Body('department') department: string,
  ) {
    const created_at = new Date;
    const data = await this.employeService.insertEmploye(
      fullname,
      nickName,
      age,
      phoneNumber,
      gender,
      department,
      created_at
    );
    
    return {
      message: 'Employe has been created',
      data,
    };
  }

  @Get('findAll')
  async getAllEmploye(@Req() req) {
    const employes = await this.employeService.getAllEmploye(req.query);

    return employes;
  }

  @Get(':id')
  async getEmployeId(@Param('id') employeId: string) {
    const employe = await this.employeService.getEmployeId(employeId);

    return employe;
  }

  @Put(':id')
  async updateEmploye(
    @Param('id') employeId: string,
    @Body('fullname') employeFullname: string,
    @Body('nickname') employeNickname: string,
    @Body('age') employeAge: number,
    @Body('phoneNumber') employePhoneNumber: number,
    @Body('gender') employeGender: string,
    @Body('department') employeDepartment: string,
  ) {
    const updated_at = new Date;
    const employe = await this.employeService.updateEmploye(
      employeId,
      employeFullname,
      employeNickname,
      employeAge,
      employePhoneNumber,
      employeGender,
      employeDepartment
    );
    
    return {
      message: 'Employe succesfully updated',
      employe,
      updated_at
    }
  }

  @Delete(':id')
  async deleteEmploye(@Param('id') employeId: string) {
    const employe = await this.employeService.deleteEmploye(employeId);

    return {
      message: 'Employe succesfully deleted',
      employe
    };
  }


}
