import { Injectable } from '@nestjs/common';
import { Doctor } from './entitites/doctor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorRes } from './interfaces/doctor.interface';
import { DoctorDTO } from './dto/doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  private readonly doctors: Doctor[] = [];

  async create(doctorDTO: DoctorDTO): Promise<DoctorRes | void> {
    console.log(doctorDTO);
    return await this.doctorRepository.save(doctorDTO).then(e => {
      DoctorRes.fromEntity(e);
    });
  }

  async findAll(): Promise<DoctorRes[]> {
    return await this.doctorRepository
      .find()
      .then(doctorEnts =>
        doctorEnts.map(docEntity => DoctorRes.fromEntity(docEntity)),
      );
  }
}
