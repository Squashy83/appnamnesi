import { IsDefined, IsString, IsNumber } from 'class-validator';

export enum AddressTypeOutputEnum {
  VIALE = 'Viale',
  VIA = 'Via',
  PIAZZA = 'Piazza',
  LARGO = 'Largo',
}

export enum AddressTypeInputEnum {
  Viale = 'VIALE',
  Via = 'VIA',
  Piazza = 'PIAZZA',
  Largo = 'LARGO',
}

export class Address {
  @IsDefined()
  @IsString()
  type: AddressTypeInputEnum | AddressTypeOutputEnum;

  @IsDefined()
  @IsString()
  address: string;

  @IsDefined()
  @IsNumber()
  number: number;

  @IsDefined()
  @IsString()
  zipcode: string;

  @IsDefined()
  @IsString()
  city: string;

  @IsDefined()
  @IsString()
  country: string;
}
