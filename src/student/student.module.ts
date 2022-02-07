import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Student, StudentSchema } from '../entities/student.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema }])
  ],
  providers: [StudentResolver, StudentService]
})
export class StudentModule {}
