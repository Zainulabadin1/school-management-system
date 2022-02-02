//Schema for mongodb

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator')


@Schema()
export class Teacher extends Document{
   
    @Prop()
    name: string

    @Prop({unique : true})
    email: string

    @Prop()
    password: string

    @Prop()
    contactNumber: number

    @Prop()
    salary: number
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
TeacherSchema.plugin(uniqueValidator)