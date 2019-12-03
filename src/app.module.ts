import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorService } from './modules/doctors/doctor.service';
import { DoctorController } from './modules/doctors/doctor.controller';
import { DoctorModule } from './modules/doctors/doctor.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DoctorModule],
  controllers: [AppController, DoctorController],
  providers: [AppService, DoctorService],
})
export class AppModule {}
