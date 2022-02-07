import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Teacher, TeacherSchema } from '../entities/teacher.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Teacher.name, schema: TeacherSchema }])
  ],
  providers: [TeacherResolver, TeacherService]
})
export class TeacherModule {}
