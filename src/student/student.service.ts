import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginStudentInput } from './inputs/loginStudent.input';

import { Student } from '../entities/student.entity';

@Injectable()
export class StudentService {

  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ) { }


  async loginStudent(loginStudent: LoginStudentInput) {
    try {
      const student = await this.studentModel.find({
        $and: [
          { email: { $eq: loginStudent.email } },
          { password: { $eq: loginStudent.password } }
        ]
      })
      if (student.length == 0) {
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
