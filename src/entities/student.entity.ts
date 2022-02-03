//Schema for mongodb

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


@Schema({collection : 'students'})
export class Student extends Document{
   
    @Prop()
    name: string

    @Prop({unique : true})
    email: string

    @Prop()
    password: string

    @Prop()
    gender : string

    @Prop()
    religion : string

    @Prop()
    dob: Date

    @Prop()
    age : string

    @Prop()
    address: string

    @Prop()
    rollNumber:  number

    @Prop()
    class: number

    @Prop()
    section: string

    @Prop({default : true})
    isStudent: boolean

    @Prop({default : new Date()})
    joiningDate : Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'parents' })
    parentId : mongoose.Schema.Types.ObjectId 
}

export const StudentSchema = SchemaFactory.createForClass(Student);
StudentSchema.plugin(uniqueValidator)