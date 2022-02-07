import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from '../entities/student.entity';

import { LoginStudentInput } from './inputs/loginStudent.input';

import { StudentDto } from './dto/student.dto';

@Resolver(() => StudentDto)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(()=> [StudentDto])
  loginStudent(@Args('loginStudentInput') loginStudentInput: LoginStudentInput){
    return this.studentService.loginStudent(loginStudentInput);
  }



  // @Mutation(() => Student)
  // createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
  //   return this.studentService.create(createStudentInput);
  // }

  // @Query(() => [Student], { name: 'student' })
  // findAll() {
  //   return this.studentService.findAll();
  // }

  // @Query(() => Student, { name: 'student' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.studentService.findOne(id);
  // }

  // @Mutation(() => Student)
  // updateStudent(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
  //   return this.studentService.update(updateStudentInput.id, updateStudentInput);
  // }

  // @Mutation(() => Student)
  // removeStudent(@Args('id', { type: () => Int }) id: number) {
  //   return this.studentService.remove(id);
  // }
}
