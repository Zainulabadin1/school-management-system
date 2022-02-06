import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class LoginAccountantInput {
    @Field()
  email: string

  @Field()
  password: string
  
}
