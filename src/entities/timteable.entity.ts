//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';



@Schema({ collection: 'timetable' })
export class Timetable extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'teachers' })
    teacherId: mongoose.Schema.Types.ObjectId

    @Prop()
    day: string

    @Prop()
    slot: string

    @Prop()
    class: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'subjects' })
    subject: mongoose.Schema.Types.ObjectId

    @Prop()
    roomNo: number
}

export const TimetableSchema = SchemaFactory.createForClass(Timetable);
