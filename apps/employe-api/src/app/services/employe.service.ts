import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employe } from '../models/employe.model';
import { Model } from 'mongoose';

@Injectable()
export class EmployesService {

  private employe: Employe[] = [];

  constructor(
    @InjectModel('Employe') private readonly employeModel: Model<Employe>
  ) {}

  async insertEmploye(
    fullName: string,
    nickName: string,
    age: number,
    phoneNumber: number,
    gender: string,
    department: string,
    created_at: Date
  ) {
    const newEmploye = new this.employeModel({
      fullName,
      nickName,
      age,
      phoneNumber,
      gender,
      department,
      created_at
    });
    const result = await newEmploye.save();
    return result;
  }

}
