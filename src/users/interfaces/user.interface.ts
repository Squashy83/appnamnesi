import { User } from '../entitites/user.entity';
import { UserRoles, CountriesOutput, CountriesInput } from '../users.enum';
import { Address } from '../../app.common.model';

//questo oggetto rappresenta il Rest Bean Res

export class UserRes {
  id: string;
  name: string;
  surname: string;
  realaddress: Address;
  legaladdress: Address;
  roles: UserRoles[] = [UserRoles.USER];
  birthdate: Date;
  phone: string;
  email: string;
  fiscalcode: string;
  currentnationality: CountriesInput | CountriesOutput;
  originnationality: CountriesInput | CountriesOutput;

  private static from(res: Partial<UserRes>): UserRes {
    const it = new UserRes();
    Object.keys(res).forEach(key => (it[key] = res[key]));
    it.originnationality = CountriesOutput[res.originnationality];
    it.currentnationality = CountriesOutput[res.currentnationality];
    return it;
  }

  public static fromEntity(entity: User) {
    return this.from(entity);
  }
}
