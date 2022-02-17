import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from '../entities/student.entity';

import { LoginStudentInput } from './inputs/loginStudent.input';

import { loginStudentResponseDto } from './ApiResponsesDto/loginStudentResponse.dto';

import { ViewAssignmentMarksResponseDto } from './ApiResponsesDto/viewAssignmentMarksResponse.dto';
import { ViewQuizzesMarksResponseDto } from './ApiResponsesDto/viewQuizMarksResponse.dto';
import { ViewTimetableResponseDto } from './ApiResponsesDto/viewTimetableResponse.dto';
import { ViewAttendanceResponseDto } from './ApiResponsesDto/viewAttendanceResponse.dto';
import { ViewPaperMarksResponseDto } from './ApiResponsesDto/viewPaperMarksResponse.dto';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) { }

  @Mutation(() => loginStudentResponseDto)
  loginStudent(@Args('loginStudentInput') loginStudentInput: LoginStudentInput) {
    return this.studentService.loginStudent(loginStudentInput);
  }

  @Query(() => ViewAssignmentMarksResponseDto)
  async viewAssignmentMarks() {
    return await this.studentService.viewAssignmentMarks();
  }

  @Query(() => ViewQuizzesMarksResponseDto)
  async viewQuizzMarks() {
    return await this.studentService.viewQuizzMarks();
  }

  @Query(() => ViewTimetableResponseDto)
  async viewTimetable() {
    return await this.studentService.viewtimetable();
  }

  @Query(() => ViewAttendanceResponseDto)
  async viewAttendance() {
    return await this.studentService.viewAttendance();
  }

  @Query(() => ViewPaperMarksResponseDto)
  async viewPaperMarks() {
    return await this.studentService.viewpapermarks();
  }

}
