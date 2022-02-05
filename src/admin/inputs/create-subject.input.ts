import { InputType, Field, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class CreateSubjectInput {
    @Field()
    name: string

    @Field()
    subjectCode: string
  
}
