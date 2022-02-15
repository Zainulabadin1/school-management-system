import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { markTeacherAttendanceInput } from './inputs/markTeacherAttendance.input';
import { markStudentAttendanceInput } from './inputs/markStudentAttendance.input';

import { AssignmentMarksInput } from './inputs/enterAssignmentMarks.input';
import { QuizMarksInput } from './inputs/enterQuizMarks.input';

import { UpdateAssignmentMarksInput } from './inputs/updateAssignmentMarks.input';
import { UpdateQuizMarksInput } from './inputs/updateQuizMarks.input';

import { Teacher } from '../entities/teacher.entity';
import { TeacherAttendance } from '../entities/teacherAttendance.entity';
import { StudentAttendance } from '../entities/stuAttendance.entity';
import { Assignments } from '../entities/assignment.entity';
import { Quizzes } from '../entities/quizzes.entity';

@Injectable()
export class TeacherService {

  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
    @InjectModel(TeacherAttendance.name) private readonly teacherAttendanceModel: Model<TeacherAttendance>,
    @InjectModel(StudentAttendance.name) private readonly studentAttendanceModel: Model<StudentAttendance>,
    @InjectModel(Assignments.name) private readonly assignmentsModel: Model<Assignments>,
    @InjectModel(Quizzes.name) private readonly quizzesModel: Model<Quizzes>,
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
    catch (error) {
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


  async markStudentAttendance(studentAttendanceInput: markStudentAttendanceInput) {
    try {
      const studentAttendance = await new this.studentAttendanceModel(studentAttendanceInput)
      const attendanceMarked = studentAttendance.save();
      let apiResponse = {
        code: 200,
        message: "Student attendance marked successfully",
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

  async viewStuAttendance() {
    try {

      const stuAttendance = await this.studentAttendanceModel.find();
      {
        let apiResponse = {
          code: 200,
          message: "Record found",
          data: stuAttendance
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

  async viewTeacherAttendance() {
    try {

      const teacherAttendance = await this.teacherAttendanceModel.find();
      {
        let apiResponse = {
          code: 200,
          message: "Record found",
          data: teacherAttendance
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


  async enterAssignmentMarks(assignmentMarksInput: AssignmentMarksInput) {
    try {
      const assignmentMarks = await new this.assignmentsModel(assignmentMarksInput)
      const enteredAssignmentMarks = assignmentMarks.save();
      let apiResponse = {
        code: 200,
        message: "Student assignment marks added successfully",
        data: enteredAssignmentMarks
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


  async updateAssignmentMarks(updateAssignmentMarksInput: UpdateAssignmentMarksInput) {
    try {
      const updatedAssignmentMarks = await this.assignmentsModel.findByIdAndUpdate(updateAssignmentMarksInput._id, { $set: updateAssignmentMarksInput }, { new: true });
      if (!updatedAssignmentMarks) {
        let apiResponse = {
          code: 404,
          message: "Record not found"
        }
        return apiResponse
      }
      else {

        let apiResponse = {
          code: 200,
          message: "Assignment marks updated successfully",
          data: updatedAssignmentMarks
        }
        return apiResponse
      }

    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }
  }


  async enterQuizMarks(quizMarksInput: QuizMarksInput) {
    try {
      const quizMarks = await new this.quizzesModel(quizMarksInput)
      const enteredQuizMarks = quizMarks.save();
      let apiResponse = {
        code: 200,
        message: "Student quiz marks added successfully",
        data: enteredQuizMarks
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

  async updateQuizMarks(updateQuizMarksInput: UpdateQuizMarksInput) {
    try {
      const updatedQuizMarks = await this.quizzesModel.findByIdAndUpdate(updateQuizMarksInput._id, { $set: updateQuizMarksInput }, { new: true });
      if (!updatedQuizMarks) {
        let apiResponse = {
          code: 404,
          message: "Record not found"
        }
        return apiResponse
      }
      else {

        let apiResponse = {
          code: 200,
          message: "Quiz marks updated successfully",
          data: updatedQuizMarks
        }
        return apiResponse
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
