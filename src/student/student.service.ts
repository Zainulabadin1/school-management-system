import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginStudentInput } from './inputs/loginStudent.input';

import { Student } from '../entities/student.entity';

@Injectable()
export class StudentService {

  constructor (
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ){}


  async loginStudent (loginStudent : LoginStudentInput){
    return await this.studentModel.find({
      $and: [
        { email: { $eq: loginStudent.email } },
        { password: { $eq: loginStudent.password } }
      ]
    })
  }




  // create(createStudentInput: CreateStudentInput) {
  //   return 'This action adds a new student';
  // }

  // findAll() {
  //   return `This action returns all student`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} student`;
  // }

  // update(id: number, updateStudentInput: UpdateStudentInput) {
  //   return `This action updates a #${id} student`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} student`;
  // }
}
