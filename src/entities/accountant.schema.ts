//Schema for mongodb

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator')


@Schema()
export class Accountant extends Document{
   
    @Prop()
    name: string

    @Prop({unique : true})
    email: string

    @Prop()
    password: string

    @Prop()
    contactNumber: number

}

export const AccountantSchema = SchemaFactory.createForClass(Accountant);
AccountantSchema.plugin(uniqueValidator)