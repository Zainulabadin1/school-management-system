import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { Teacher } from '../entities/teacher.entity';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { loginTeacherResponseDto } from './ApiResponsesDto/loginTeacherResponse.dto';

@Resolver()
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation(()=> loginTeacherResponseDto)
 loginTeacher (@Args('loginTeacherInput')loginStudentInput: LoginTeacherInput) {
   return this.teacherService.loginTeacher(loginStudentInput);
 }

  
}
