import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Admin, AdminSchema } from '../entities/admin.entity';
import { Teacher, TeacherSchema } from '../entities/teacher.entity';
import { Student, StudentSchema } from '../entities/student.entity';
import { Accountant, AccountantSchema } from '../entities/accountant.entity';
import { Subjects, SubjectsSchema } from '../entities/subject.entity';
import { Timetable, TimetableSchema } from '../entities/timteable.entity';
import { Parent, ParentSchema } from '../entities/parent.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Admin.name, schema: AdminSchema }]),

    MongooseModule.forFeature([
      { name: Teacher.name, schema: TeacherSchema }]),

    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema }]),

    MongooseModule.forFeature([
      { name: Accountant.name, schema: AccountantSchema }]),

    MongooseModule.forFeature([
      { name: Subjects.name, schema: SubjectsSchema }]),

    MongooseModule.forFeature([
      { name: Timetable.name, schema: TimetableSchema }]),

    MongooseModule.forFeature([
      { name: Parent.name, schema: ParentSchema }])
  ],
  providers: [AdminResolver, AdminService]
})
export class AdminModule { }
