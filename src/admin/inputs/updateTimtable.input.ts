import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateTimetableInput {
    @Field(() => ID)
    _id: ObjectId

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
