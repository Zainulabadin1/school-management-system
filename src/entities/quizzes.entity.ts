//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';



@Schema({ collection: 'quizzes' })
export class Quizzes extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'students' })
    studentId: mongoose.Schema.Types.ObjectId

    @Prop()
    quizNumber: number

    @Prop()
    totalMarks: number

    @Prop({ default: false })
    isSubmitted: boolean

    @Prop({ default: 0 })
    obtainedMarks: number

    @Prop()
    class: number

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'subjects'})
    subject: mongoose.Schema.Types.ObjectId
}

export const QuizzesSchema = SchemaFactory.createForClass(Quizzes);
