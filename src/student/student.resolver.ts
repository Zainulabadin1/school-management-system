import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from '../entities/student.entity';

import { LoginStudentInput } from './inputs/loginStudent.input';

import { loginStudentResponseDto } from './ApiResponsesDto/loginStudentResponse.dto';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(()=> loginStudentResponseDto)
  loginStudent(@Args('loginStudentInput') loginStudentInput: LoginStudentInput){
    return this.studentService.loginStudent(loginStudentInput);
  }



  
}
