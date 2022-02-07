import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class loginTeacherResponseDto {

    @Field()
    code: number

    @Field()
    message : string

}