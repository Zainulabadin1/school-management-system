import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class loginAdminResponseDto {

    @Field()
    code: number

    @Field()
    message : string

}