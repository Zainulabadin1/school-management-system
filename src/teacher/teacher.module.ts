import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Teacher, TeacherSchema } from '../entities/teacher.entity';
import { TeacherAttendance, TeacherAttendanceSchema } from '../entities/teacherAttendance.entity';
import { StudentAttendance, StudentAttendanceSchema } from '../entities/stuAttendance.entity';
import { Assignments, AssignmentsSchema } from '../entities/assignment.entity';
import { Quizzes, QuizzesSchema } from '../entities/quizzes.entity';
import { Papers, PapersSchema } from '../entities/papers.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Teacher.name, schema: TeacherSchema }]),

    MongooseModule.forFeature([
      { name: TeacherAttendance.name, schema: TeacherAttendanceSchema }]),

    MongooseModule.forFeature([
      { name: StudentAttendance.name, schema: StudentAttendanceSchema }]),

    MongooseModule.forFeature([
      { name: Assignments.name, schema: AssignmentsSchema }]),

    MongooseModule.forFeature([
      { name: Quizzes.name, schema: QuizzesSchema }]),

    MongooseModule.forFeature([
      { name: Papers.name, schema: PapersSchema }]),
  ],
  providers: [TeacherResolver, TeacherService]
})
export class TeacherModule { }
