import { Controller, Get } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('/doctors')
  async getAllDoctors(): Promise<Doctor[]> {
    return await this.doctorService.findAll();
  }
}
