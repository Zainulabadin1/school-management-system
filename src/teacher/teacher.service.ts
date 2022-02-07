import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { Teacher } from '../entities/teacher.entity';

@Injectable()
export class TeacherService {

  constructor (
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
  ){}

  async loginTeacher (loginTeacher : LoginTeacherInput){
    return await this.teacherModel.find({
      $and: [
        { email: { $eq: loginTeacher.email } },
        { password: { $eq: loginTeacher.password } }
      ]
    })
  }


  // create(createTeacherInput: CreateTeacherInput) {
  //   return 'This action adds a new teacher';
  // }

  // findAll() {
  //   return `This action returns all teacher`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} teacher`;
  // }

  // update(id: number, updateTeacherInput: UpdateTeacherInput) {
  //   return `This action updates a #${id} teacher`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} teacher`;
  // }
}
