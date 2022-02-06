import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateTimetableInput {
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
