import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DoctorsService } from './doctors.service';
import { Doctor } from './entitites/doctor.entity';
import { CreateDoctorDTO } from './dto/doctor.dto';

@Resolver('Doctor')
export class DoctorResolver {
  constructor(private readonly doctorService: DoctorsService) {}

  @Query(() => [Doctor])
  async doctors() {
    const doctors = this.doctorService.findAll();
    return doctors;
  }

  @Mutation(() => Doctor)
  async createDoctor(@Args('input') input: CreateDoctorDTO) {
    return await this.doctorService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteDoctor(@Args('_id') _id: string) {
    return await this.doctorService.delete(_id);
  }
}
