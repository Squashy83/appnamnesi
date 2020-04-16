import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Address } from '../../app.common.model';
import {
  OrganizationTypeInputEnum,
  OrganizationTypeOutputEnum,
} from '../organizations.enum';

@Entity('organizations')
export class Organization {
  @ObjectIdColumn()
  // tslint:disable-next-line: variable-name
  _id: string;

  @Column()
  creatorId: string;

  @Column({
    type: 'enum',
    enum: OrganizationTypeInputEnum,
    default: OrganizationTypeInputEnum.Onlus,
  })
  type: OrganizationTypeInputEnum | OrganizationTypeOutputEnum;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logo: string;

  @Column()
  vatnumber: string;

  @Column()
  phone: string;

  @Column()
  fiscalcode: string;

  @Column()
  address: Address;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string;
}
