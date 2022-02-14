import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@InputType()
export class UpdateParentInput {
    @Field(() => ID)
    _id: ObjectId

    @Field({ nullable: true })
    name: string

    @Field({ nullable: true })
    email: string

    @Field({ nullable: true })
    password: string

    @Field({ nullable: true })
    gender: string

    @Field({ nullable: true })
    contactNumber: number

}