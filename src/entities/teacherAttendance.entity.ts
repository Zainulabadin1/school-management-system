//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


@Schema({ collection: 'teachers-attendance' })
export class TeacherAttendance extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'teachers' })
    teacherId: mongoose.Schema.Types.ObjectId

    @Prop({ default: false })
    isPresent: boolean

    @Prop({ default: new Date() })
    date: Date
}

export const TeacherAttendanceSchema = SchemaFactory.createForClass(TeacherAttendance);
