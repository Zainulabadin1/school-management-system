import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { Teacher } from '../entities/teacher.entity';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { markTeacherAttendanceInput } from './inputs/markTeacherAttendance.input';

import { loginTeacherResponseDto } from './ApiResponsesDto/loginTeacherResponse.dto';

import { MarkTeacherAttendanceResponseDto } from './ApiResponsesDto/markTeacherAttendanceResponse.dto';

@Resolver()
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation(()=> loginTeacherResponseDto)
async loginTeacher (@Args('loginTeacherInput')loginStudentInput: LoginTeacherInput) {
   return await this.teacherService.loginTeacher(loginStudentInput);
 }

 @Mutation(()=> MarkTeacherAttendanceResponseDto)
async teacherAttendance(@Args('teacherAttendanceInput')teacherAttendanceInput: markTeacherAttendanceInput){
  return await this.teacherService.markTeacherAttendance(teacherAttendanceInput);
}

  
}
