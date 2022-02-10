//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


@Schema({ collection: 'salary' })
export class Salary extends Document {

    @Prop()
    name: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'teachers' })
    teacherID: mongoose.Schema.Types.ObjectId

    @Prop()
    employeeId: string

    @Prop()
    salary: number

    @Prop()
    fine: number

    @Prop({ default: new Date() })
    payingDate: Date

    @Prop({ default: false })
    isPaid: boolean

    @Prop()
    amountPaid: number
}

export const SalarySchema = SchemaFactory.createForClass(Salary);
