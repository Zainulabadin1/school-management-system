import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class LoginParentInput {
    @Field()
  email: string

  @Field()
  password: string
  
}
