import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Admin, AdminSchema } from '../entities/admin.entity';
import { Teacher, TeacherSchema } from '../entities/teacher.entity';
import { Student, StudentSchema } from '../entities/student.entity';
import { Accountant, AccountantSchema } from '../entities/accountant.entity';

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
  ],
  providers: [AdminResolver, AdminService]
})
export class AdminModule { }
