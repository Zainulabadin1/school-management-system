import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class createParentInput{
    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password: string

    @Field()
    gender: string

    @Field()
    contactNumber: number
    
}