import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateSubjectInput {
    @Field(() => ID)
    _id: ObjectId

    @Field({ nullable: true })
    name: string

    @Field({ nullable: true })
    subjectCode: string
  
}
