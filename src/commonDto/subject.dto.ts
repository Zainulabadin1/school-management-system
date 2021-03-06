import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class SubjectDto{
    @Field()
    _id: string

    @Field()
    name: string

    @Field()
    subjectCode: string
}