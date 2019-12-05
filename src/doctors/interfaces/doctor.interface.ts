import { Doctor } from '../entitites/doctor.entity';

//questo oggetto rappresenta il Rest Bean Res

export class DoctorRes {
  id: string;
  name: string;
  surname: string;

  private static from(res: Partial<DoctorRes>): DoctorRes {
    const it = new DoctorRes();
    it.id = res.id;
    it.name = res.name;
    it.surname = res.surname;
    return it;
  }

  public static fromEntity(entity: Doctor) {
    return this.from({
      id: entity._id,
      name: entity.name,
      surname: entity.surname,
    });
  }
}
