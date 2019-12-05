import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DoctorsService } from './doctors.service';
import { Doctor } from './entitites/doctor.entity';
import { DoctorResolver } from './doctors.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor])],
  controllers: [
    /*DoctorsController*/
  ],
  providers: [DoctorResolver, DoctorsService],
})
export class DoctorsModule {}
