import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginStudentInput } from './inputs/loginStudent.input';

import { Student } from '../entities/student.entity';
import { Assignments } from '../entities/assignment.entity';
import { Quizzes } from '../entities/quizzes.entity';

@Injectable()
export class StudentService {

  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
    @InjectModel(Assignments.name) private readonly assignmentsModel: Model<Assignments>,
    @InjectModel(Quizzes.name) private readonly quizzesModel: Model<Quizzes>,
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

  async viewAssignmentMarks() {
    try {

      const result = await this.assignmentsModel.find();
      {
        let apiResponse = {
          code: 200,
          message: "Record found",
          data: result
        }
        return apiResponse;
      }
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }

  }

  async viewQuizzMarks() {
    try {

      const result = await this.quizzesModel.find();
      {
        let apiResponse = {
          code: 200,
          message: "Record found",
          data: result
        }
        return apiResponse;
      }
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }

  }


}
