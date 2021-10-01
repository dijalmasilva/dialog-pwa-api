import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'list' })
  findByName(
    @Args('name', { type: () => String, nullable: true }) name?: string,
  ) {
    if (name) {
      return this.usersService.findByName(name);
    }

    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String, nullable: true }) id?: string) {
    return this.usersService.findOne(id);
  }
}
