import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateTimetableInput {
    @Field(() => ID)
    _id: ObjectId

    @Field(() => ID, { nullable: true })
    teacherId: ObjectId

    @Field({ nullable: true })
    day: string

    @Field({ nullable: true })
    slot: string

    @Field({ nullable: true })
    class: string

    @Field(() => ID, { nullable: true })
    subject: ObjectId

    @Field({ nullable: true })
    roomNo: number
  
}
