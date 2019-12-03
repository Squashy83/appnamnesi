import { IsString, IsUUID } from 'class-validator';

//questo oggetto rappresenta il Rest Bean Req
// item.dto.ts

import { Doctor } from '../entitites/doctor.entity';
import { ObjectID } from 'typeorm';

export class DoctorDTO implements Readonly<DoctorDTO> {
  id: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  public toEntity() {
    const it = new Doctor();
    it._id = this.id;
    it.name = this.name;
    it.surname = this.surname;
    // it.createDateTime = new Date();
    // it.createdBy = user ? user.id : null;
    // it.lastChangedBy = user ? user.id : null;
    return it;
  }
}
