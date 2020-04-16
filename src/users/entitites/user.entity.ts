import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRoles, CountriesInput, CountriesOutput } from '../users.enum';
import { Address } from '../../app.common.model';

@Entity('users')
export class User {
  @ObjectIdColumn()
  // tslint:disable-next-line: variable-name
  _id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  legaladdress: Address;

  @Column()
  realaddress: Address;

  @Column()
  birthdate: Date;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: CountriesInput,
    default: CountriesInput.Italy,
  })
  currentnationality: CountriesInput | CountriesOutput;

  @Column({
    type: 'enum',
    enum: CountriesInput,
    default: CountriesInput.Italy,
  })
  originnationality: CountriesInput | CountriesOutput;

  @Column()
  fiscalcode: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    array: true,
    default: [UserRoles.USER],
  })
  roles: UserRoles[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string;
}
