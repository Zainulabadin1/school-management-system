//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';


@Schema({ collection: 'admin' })
export class Admin extends Document {

    @Prop()
    name: string

    @Prop({ unique: true })
    email: string

    @Prop()
    password: string
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
AdminSchema.plugin(uniqueValidator)