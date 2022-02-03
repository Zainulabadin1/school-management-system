//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';



@Schema({ collection: 'fees' })
export class Fees extends Document {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'students' })
    studentId: mongoose.Schema.Types.ObjectId

    @Prop()
    monthlyFee: number

    @Prop()
    Concession: number

    @Prop({ default: false })
    isPaid: boolean

    @Prop()
    amountPaid: number

    @Prop({ default: new Date() })
    date: Date
}

export const FeesSchema = SchemaFactory.createForClass(Fees);
