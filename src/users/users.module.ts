import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { User } from './entitites/user.entity';
import { UserResolver } from './users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    /*UsersController*/
  ],
  providers: [UserResolver, UsersService],
})
export class UsersModule {}
