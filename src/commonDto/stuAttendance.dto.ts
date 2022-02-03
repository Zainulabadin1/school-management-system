import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class stuAttendanceDto{
    @Field()
    studentId: mongoose.Schema.Types.ObjectId

    @Field()
    isPresent: boolean

    @Field()
    date: Date
}