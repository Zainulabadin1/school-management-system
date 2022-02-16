import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';



@InputType()
export class ViewStudentAttendanceInput {

    @Field(() => ID, { nullable: true })
    _id: ObjectId

    @Field(() => ID, { nullable: true })
    studentId: ObjectId

    @Field({ nullable: true })
    isPresent: boolean

    @Field({ nullable: true })
    date: Date
}