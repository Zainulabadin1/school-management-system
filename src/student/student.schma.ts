//Schema for mongodb

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator')


@Schema()
export class Student extends Document{
   
    @Prop()
    name: string

    @Prop({unique : true})
    email: string

    @Prop()
    password: string

    @Prop()
    dob: Date

    @Prop()
    address: string

    @Prop()
    rollNumber:  number

    @Prop()
    class: number

    @Prop()
    section: string

    @Prop()
    isStudent: boolean
}

export const StudentSchema = SchemaFactory.createForClass(Student);
StudentSchema.plugin(uniqueValidator)