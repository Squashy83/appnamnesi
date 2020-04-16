import { Organization } from '../entitites/organization.entity';
import {
  OrganizationTypeOutputEnum,
  OrganizationTypeInputEnum,
} from '../organizations.enum';
import { Address, AddressTypeOutputEnum } from '../../app.common.model';

//questo oggetto rappresenta il Rest Bean Res

export class OrganizationRes {
  id: string;
  creatorId: string;
  type: OrganizationTypeInputEnum | OrganizationTypeOutputEnum;
  name: string;
  description: string;
  logo: string;
  vatnumber: string;
  phone: string;
  fiscalcode: string;
  address: Address;

  private static from(res: Partial<OrganizationRes>): OrganizationRes {
    const it = new OrganizationRes();
    Object.keys(res).forEach(key => (it[key] = res[key]));
    it.type = OrganizationTypeOutputEnum[res.type];
    it.address.type = AddressTypeOutputEnum[it.address.type];
    return it;
  }

  public static fromEntity(entity: Organization) {
    return this.from(entity);
  }
}
