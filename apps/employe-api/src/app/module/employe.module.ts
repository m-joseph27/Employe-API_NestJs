import { Module } from '@nestjs/common';
import { EmployesService } from '../services/employe.service';
import { EmployesController } from '../controllers/employe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeSchema } from '../models/employe.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Employe', schema: EmployeSchema }])],
  providers: [EmployesService],
  controllers: [EmployesController]
})
export class EmployesModule {}
