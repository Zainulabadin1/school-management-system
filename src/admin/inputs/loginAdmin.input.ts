import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class LoginAdminInput {
    @Field()
  email: string

  @Field()
  password: string
  
}
