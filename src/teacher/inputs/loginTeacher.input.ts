import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class LoginTeacherInput {
    @Field()
  email: string

  @Field()
  password: string
  
}
