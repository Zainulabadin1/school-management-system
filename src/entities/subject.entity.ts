//Schema for mongodb

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema({ collection: 'subjects' })
export class Subjects extends Document {

    @Prop()
    name: string

    @Prop()
    subjectCode: string


}

export const SubjectsSchema = SchemaFactory.createForClass(Subjects);
