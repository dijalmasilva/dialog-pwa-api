import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'ID of the user (id)' })
  _id: string;

  @Field(() => Int, { description: 'Index of the user (index)' })
  index: number;

  @Field(() => String, { description: 'Picture of the user (picture)' })
  picture: string;

  @Field(() => Int, { description: 'Age of the user (age)' })
  age: string;

  @Field(() => String, { description: 'Eye color of the user (eye)' })
  eyeColor: string;

  @Field(() => String, { description: 'Name of the user (name)' })
  name: string;

  @Field(() => String, { description: 'Company of the user (eye)' })
  company: string;

  @Field(() => String, { description: 'Email of the user (email)' })
  email: string;

  @Field(() => String, { description: 'Phone of the user (phone)' })
  phone: string;

  @Field(() => String, { description: 'Greeting of the user (greeting)' })
  greeting: string;

  @Field(() => [User], { description: 'Friends of the user (friends)' })
  friends: User[];
}
