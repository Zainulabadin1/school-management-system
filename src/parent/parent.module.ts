import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentResolver } from './parent.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Parent, ParentSchema } from '../entities/parent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Parent.name, schema: ParentSchema }])
  ],
  providers: [ParentResolver, ParentService]
})
export class ParentModule {}
