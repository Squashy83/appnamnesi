// import { Controller, Get, Post, Body } from '@nestjs/common';
// import { DoctorDTO } from './dto/doctor.dto';
// import { DoctorsService } from './doctors.service';
// import { DoctorRes } from './interfaces/doctor.interface';

// @Controller('doctors')
// export class DoctorsController {
//   constructor(private readonly doctorsService: DoctorsService) {}

//   @Post('/createnew')
//   async create(@Body() createDoctorDto: DoctorDTO): Promise<DoctorRes | void> {
//     const response = await this.doctorsService.create(
//       createDoctorDto as DoctorDTO,
//     );
//     return response;
//   }

//   @Get('/list')
//   async findAll(): Promise<DoctorRes[]> {
//     return this.doctorsService.findAll();
//   }
// }
