import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class createParentInput {
    @Field(() => ID)
    _id: ObjectId

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