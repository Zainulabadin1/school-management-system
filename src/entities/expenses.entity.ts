//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


@Schema({ collection: 'expenses' })
export class Expenses extends Document {

    @Prop()
    expenseDetail: string

    @Prop({ default: new Date() })
    payingDate: Date

    @Prop()
    amountPaid: number
}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);
