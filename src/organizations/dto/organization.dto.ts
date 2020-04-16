import {
  IsString,
  IsUUID,
  IsArray,
  IsDate,
  IsDefined,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator';

//questo oggetto rappresenta il Rest Bean Req
// item.dto.ts

import { Organization } from '../entitites/organization.entity';
import { ObjectID } from 'typeorm';
import { isArray } from 'util';
import { OrganizationTypeInputEnum } from '../organizations.enum';
import { Address, AddressTypeInputEnum } from '../../app.common.model';
import { Type } from 'class-transformer';

export class CreateOrganizationDTO implements Readonly<CreateOrganizationDTO> {
  // id: string;

  @IsDefined()
  @IsString()
  creatorId: string;

  @IsDefined()
  @IsString()
  type: OrganizationTypeInputEnum;

  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  logo: string;

  @IsDefined()
  @IsString()
  vatnumber: string;

  @IsDefined()
  @IsString()
  phone: string;

  @IsDefined()
  @IsString()
  fiscalcode: string;

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address: Address;

  public toEntity() {
    const it = new CreateOrganizationDTO();
    Object.keys(this).forEach(key => (it[key] = this[key]));
    it.type = OrganizationTypeInputEnum[this.type];
    it.address.type = AddressTypeInputEnum[this.address.type];
    return it;
  }
}
