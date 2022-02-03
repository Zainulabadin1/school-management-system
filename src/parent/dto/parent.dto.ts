import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ParentDto{
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