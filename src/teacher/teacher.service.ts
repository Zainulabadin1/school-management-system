import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { Teacher } from '../entities/teacher.entity';

@Injectable()
export class TeacherService {

  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
  ) { }

  async loginTeacher(loginTeacher: LoginTeacherInput) {
    try {
      const teacher = await this.teacherModel.find({
        $and: [
          { email: { $eq: loginTeacher.email } },
          { password: { $eq: loginTeacher.password } }
        ]
      })
      if (teacher.length == 0) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {
        let apiResponse = {
          code: 200,
          message: "You are successfully logged in"
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in logging in"
      }

      return apiResponse
    }
  }



}
