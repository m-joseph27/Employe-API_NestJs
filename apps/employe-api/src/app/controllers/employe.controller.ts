import { Controller,
  Post,
  Body
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

}
