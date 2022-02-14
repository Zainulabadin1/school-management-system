import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Teacher, TeacherSchema } from '../entities/teacher.entity';
import { TeacherAttendance, TeacherAttendanceSchema } from '../entities/teacherAttendance.entity';
import { StudentAttendance, StudentAttendanceSchema } from '../entities/stuAttendance.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Teacher.name, schema: TeacherSchema }]),

    MongooseModule.forFeature([
      { name: TeacherAttendance.name, schema: TeacherAttendanceSchema }]),

    MongooseModule.forFeature([
      { name: StudentAttendance.name, schema: StudentAttendanceSchema }])
  ],
  providers: [TeacherResolver, TeacherService]
})
export class TeacherModule { }
