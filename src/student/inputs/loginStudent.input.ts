import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class LoginStudentInput {
    @Field()
  email: string

  @Field()
  password: string
  
}
