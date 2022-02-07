import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateAdminInput {
  @Field(() => ID)
  _id: ObjectId

  @Field()
  name: string

  @Field()
  email: string

  @Field()
  password: string
}
