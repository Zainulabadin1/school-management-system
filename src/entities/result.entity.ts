//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';



@Schema({ collection: 'results' })
export class Results extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'students' })
    studentId: mongoose.Schema.Types.ObjectId

    @Prop()
    totalMarks: number

    @Prop({ default: 0 })
    obtainedMarks: number

    @Prop()
    class: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'subjects' })
    subject: mongoose.Schema.Types.ObjectId

    @Prop()
    percentage: number
}

export const ResultsSchema = SchemaFactory.createForClass(Results);
