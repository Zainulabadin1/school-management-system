//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';



@Schema({ collection: 'student-attendance' })
export class studentAttendance extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'students' })
    studentId: mongoose.Schema.Types.ObjectId

    @Prop({ default: false })
    isPresent: boolean

    @Prop({ default: new Date() })
    date: Date
}

export const studentAttendanceSchema = SchemaFactory.createForClass(studentAttendance);
