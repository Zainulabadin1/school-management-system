import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class teacherAttendanceDto{
    @Field()
    teacherId: mongoose.Schema.Types.ObjectId

    @Field()
    isPresent: boolean

    @Field()
    date: Date
}