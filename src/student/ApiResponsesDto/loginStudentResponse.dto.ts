import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class loginStudentResponseDto {

    @Field()
    code: number

    @Field()
    message : string

}