import { Field, ID, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class TeacherAttendanceDto{
    @Field(()=> ID)
    teacherId: mongoose.Schema.Types.ObjectId

    @Field()
    isPresent: boolean

    @Field({nullable: true})
    date: Date
}