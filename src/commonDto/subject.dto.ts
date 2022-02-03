import { Field, ObjectType } from "@nestjs/graphql";
import * as mongoose from 'mongoose';

@ObjectType()
export class subjectDto{
    @Field()
    name: string

    @Field()
    subjectCode: string
}