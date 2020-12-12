import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployesModule } from './module/employe.module';

@Module({
  imports: [EmployesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
