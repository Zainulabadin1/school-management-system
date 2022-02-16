import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Student, StudentSchema } from '../entities/student.entity';
import { Assignments, AssignmentsSchema } from '../entities/assignment.entity';
import { Quizzes, QuizzesSchema } from '../entities/quizzes.entity';
import { Timetable, TimetableSchema } from '../entities/timteable.entity';
import { StudentAttendance, StudentAttendanceSchema } from '../entities/stuAttendance.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema }]),

    MongooseModule.forFeature([
      { name: Assignments.name, schema: AssignmentsSchema }]),

    MongooseModule.forFeature([
      { name: Quizzes.name, schema: QuizzesSchema }]),

    MongooseModule.forFeature([
      { name: Timetable.name, schema: TimetableSchema }]),

    MongooseModule.forFeature([
      { name: StudentAttendance.name, schema: StudentAttendanceSchema }])


  ],
  providers: [StudentResolver, StudentService]
})
export class StudentModule { }
