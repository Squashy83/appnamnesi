import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('doctors')
export class Doctor {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  surname: string;
}
