import { Field , ObjectType } from "@nestjs/graphql";

@ObjectType()
export class loginAccountantResponseDto {

    @Field()
    code: number

    @Field()
    message : string

}