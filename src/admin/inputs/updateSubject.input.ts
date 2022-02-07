import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateSubjectInput {
    @Field(() => ID)
    _id: ObjectId

    @Field()
    name: string

    @Field()
    subjectCode: string
  
}
