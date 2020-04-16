import { Injectable } from '@nestjs/common';
import { User } from './entitites/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { UserRes } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  public async create(userDTO: CreateUserDTO): Promise<UserRes> {
    const newdoc = await this.userRepository.save(userDTO.toEntity());
    return UserRes.fromEntity(newdoc);
  }

  public async findAll(): Promise<UserRes[]> {
    return await this.userRepository
      .find()
      .then(userEnts =>
        userEnts.map(docEntity => UserRes.fromEntity(docEntity)),
      );
  }

  async delete(_id: string): Promise<boolean> {
    return (await this.userRepository.delete(_id)) ? true : false;
  }
}
