//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';


@Schema({ collection: 'teachers' })
export class Teacher extends Document {

    @Prop()
    name: string

    @Prop({ unique: true })
    email: string

    @Prop()
    password: string

    @Prop()
    contactNumber: number

    @Prop()
    gender: string

    @Prop()
    religion: string

    @Prop()
    dob: Date

    @Prop()
    age: number

    @Prop()
    address: string

    @Prop()
    employeeId: string

    @Prop()
    salary: number

    @Prop({ default: new Date() })
    joiningDate: Date

    @Prop({ default: true })
    isTeacher: boolean
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
TeacherSchema.plugin(uniqueValidator)