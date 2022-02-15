import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { markTeacherAttendanceInput } from './inputs/markTeacherAttendance.input';
import { markStudentAttendanceInput } from './inputs/markStudentAttendance.input';

import { AssignmentMarksInput } from './inputs/enterAssignmentMarks.input';
import { QuizMarksInput } from './inputs/enterQuizMarks.input';

import { UpdateAssignmentMarksInput } from './inputs/updateAssignmentMarks.input';
import { UpdateQuizMarksInput } from './inputs/updateQuizMarks.input';

import { loginTeacherResponseDto } from './ApiResponsesDto/loginTeacherResponse.dto';

import { MarkTeacherAttendanceResponseDto } from './ApiResponsesDto/markTeacherAttendanceResponse.dto';
import { MarkStudentAttendanceResponseDto } from './ApiResponsesDto/markStudentAttendanceResponse.dto';

import { ViewStudentAttendanceResponseDto } from './ApiResponsesDto/viewStudentAttendanceResponse.dto';
import { ViewTeacherAttendanceResponseDto } from './ApiResponsesDto/viewTeacherAttendanceResponse.dto';

import { AssignmentMarksResponseDto } from './ApiResponsesDto/enterAssignmentMarksResponse.dto';
import { QuizMarksResponseDto } from './ApiResponsesDto/enterQuizMarksResponse.dto';

import { UpdateAssignmentMarksResponseDto } from './ApiResponsesDto/updateAssignmentMarksResponse.dto';
import { UpdateQuizMarksResponseDto } from './ApiResponsesDto/updateQuizMarksResponse.dto';

@Resolver()
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) { }

  @Mutation(() => loginTeacherResponseDto)
  async loginTeacher(@Args('loginTeacherInput') loginStudentInput: LoginTeacherInput) {
    return await this.teacherService.loginTeacher(loginStudentInput);
  }

  @Mutation(() => MarkTeacherAttendanceResponseDto)
  async teacherAttendance(@Args('teacherAttendanceInput') teacherAttendanceInput: markTeacherAttendanceInput) {
    return await this.teacherService.markTeacherAttendance(teacherAttendanceInput);
  }

  @Mutation(() => MarkStudentAttendanceResponseDto)
  async studentAttendance(@Args('studentAttendanceInput') studentAttendanceInput: markStudentAttendanceInput) {
    return await this.teacherService.markStudentAttendance(studentAttendanceInput);
  }

  @Mutation(() => AssignmentMarksResponseDto)
  async enterAssignmentMarks(@Args('assignmentMarksInput') assignmentMarksInput: AssignmentMarksInput) {
    return await this.teacherService.enterAssignmentMarks(assignmentMarksInput);
  }

  @Mutation(() => UpdateAssignmentMarksResponseDto)
  async updateAssignmentMarks(@Args('updateAssignmentMarksInput') updateAssignmentMarksInput: UpdateAssignmentMarksInput) {
    return await this.teacherService.updateAssignmentMarks(updateAssignmentMarksInput);
  }

  @Mutation(() => QuizMarksResponseDto)
  async enterQuizMarks(@Args('quizMarksInput') quizMarksInput: QuizMarksInput) {
    return await this.teacherService.enterQuizMarks(quizMarksInput);
  }


  @Mutation(() => UpdateQuizMarksResponseDto)
  async updateQuizMarks(@Args('updateQuizMarksInput') updateQuizMarksInput: UpdateQuizMarksInput) {
    return await this.teacherService.updateQuizMarks(updateQuizMarksInput);
  }

  @Query(() => ViewStudentAttendanceResponseDto)
  async viewStuAttendance() {
    return await this.teacherService.viewStuAttendance();
  }

  @Query(() => ViewTeacherAttendanceResponseDto)
  async viewTeacherAttendance() {
    return await this.teacherService.viewTeacherAttendance();
  }



}
