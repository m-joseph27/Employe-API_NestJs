import { Module } from '@nestjs/common';
import { EmployesService } from '../services/employe.service';
import { EmployesController } from '../controllers/employe.controller';

@Module({
  providers: [EmployesService],
  controllers: [EmployesController]
})
export class EmployesModule {}
