//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';



@Schema({ collection: 'papers' })
export class Papers extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'students' })
    studentId: mongoose.Schema.Types.ObjectId

    @Prop()
    class: number

    @Prop()
    subject: string

    @Prop()
    totalMarks: number

    @Prop({ default: 0 })
    obtainedMarks: number

    @Prop()
    paperType: string

    @Prop({ default: false })
    isSubmitted: boolean

}

export const PapersSchema = SchemaFactory.createForClass(Papers);
