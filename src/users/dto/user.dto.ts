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

import { User } from '../entitites/user.entity';
import { ObjectID } from 'typeorm';
import { isArray } from 'util';
import { UserRoles, CountriesInput } from '../users.enum';
import { Address } from '../../app.common.model';
import { Type } from 'class-transformer';

export class CreateUserDTO implements Readonly<CreateUserDTO> {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsString()
  surname: string;

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => Address)
  realaddress: Address;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Address)
  legaladdress: Address;

  @IsDefined()
  @IsDate()
  birthdate: Date;

  @IsDefined()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsDefined()
  @IsString()
  fiscalcode: string;

  @IsDefined()
  @IsString()
  currentnationality: CountriesInput;

  @IsOptional()
  @IsString()
  originnationality: CountriesInput;

  @IsDefined()
  @IsNotEmpty()
  roles: UserRoles[];

  public toEntity() {
    const it = new CreateUserDTO();
    Object.keys(this).forEach(key => (it[key] = this[key]));
    it.currentnationality = CountriesInput[this.currentnationality];
    it.originnationality = CountriesInput[this.originnationality];

    return it;
  }
}
