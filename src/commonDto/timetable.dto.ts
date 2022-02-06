import { Field, ObjectType, ID } from "@nestjs/graphql";
import { ObjectId } from 'mongoose';

@ObjectType()
export class TimetableDto{
    @Field(() => ID)
    teacherId: ObjectId

    @Field()
    day: string

    @Field()
    slot: string

    @Field()
    class: string

    @Field(() => ID)
    subject: ObjectId

    @Field()
    roomNo: number
}