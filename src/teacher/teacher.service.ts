import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { markTeacherAttendanceInput } from './inputs/markTeacherAttendance.input';

import { Teacher } from '../entities/teacher.entity';
import { TeacherAttendance } from '../entities/teacherAttendance.entity';

@Injectable()
export class TeacherService {

  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
    @InjectModel(TeacherAttendance.name) private readonly teacherAttendanceModel: Model<TeacherAttendance>,
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
    catch (error)
    {
      let apiResponse = {
        code: 204,
        message: error.message
      }

      return apiResponse
    }
  }

  async markTeacherAttendance(teacherAttendanceInput: markTeacherAttendanceInput) {
    try {
      const teacherAttendance = await new this.teacherAttendanceModel(teacherAttendanceInput)
      const attendanceMarked = teacherAttendance.save();
      let apiResponse = {
        code: 200,
        message: "Teacher attendance marked successfully",
        data: attendanceMarked
      }
      return apiResponse;
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse;
    }
  }




}
