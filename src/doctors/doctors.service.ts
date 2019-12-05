import { Injectable } from '@nestjs/common';
import { Doctor } from './entitites/doctor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { DoctorRes } from './interfaces/doctor.interface';
import { CreateDoctorDTO } from './dto/doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: MongoRepository<Doctor>,
  ) {}

  public async create(doctorDTO: CreateDoctorDTO): Promise<DoctorRes> {
    const newdoc = await this.doctorRepository.save(doctorDTO);
    return DoctorRes.fromEntity(newdoc);
  }

  public async findAll(): Promise<DoctorRes[]> {
    return await this.doctorRepository
      .find()
      .then(doctorEnts =>
        doctorEnts.map(docEntity => DoctorRes.fromEntity(docEntity)),
      );
  }

  async delete(_id: string): Promise<boolean> {
    return (await this.doctorRepository.delete(_id)) ? true : false;
  }
}
