//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

@Schema({ collection: 'parents' })
export class Parent extends Document {

    @Prop()
    name: string

    @Prop({ unique: true })
    email: string

    @Prop()
    password: string

    @Prop()
    gender: string

    @Prop()
    contactNumber: number

}

export const ParentSchema = SchemaFactory.createForClass(Parent);
ParentSchema.plugin(uniqueValidator)