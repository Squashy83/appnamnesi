import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entitites/user.entity';
import { CreateUserDTO } from './dto/user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User])
  async users() {
    const users = this.userService.findAll();
    return users;
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserDTO) {
    return await this.userService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('_id') _id: string) {
    return await this.userService.delete(_id);
  }
}
