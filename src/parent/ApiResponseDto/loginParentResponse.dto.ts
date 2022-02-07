import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class loginParentResponseDto {

    @Field()
    code: number

    @Field()
    message : string

}