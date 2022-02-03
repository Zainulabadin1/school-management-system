import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class timetableDto{
    @Field()
    teacherId: mongoose.Schema.Types.ObjectId

    @Field()
    day: string

    @Field()
    slot: string

    @Field()
    class: string

    @Field()
    subject: mongoose.Schema.Types.ObjectId

    @Field()
    roomNo: number
}