import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { Teacher } from '../entities/teacher.entity';

import { LoginTeacherInput } from './inputs/loginTeacher.input';

import { TeacherDto } from './dto/teacher.dto';

@Resolver(() => TeacherDto)
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation(()=> [TeacherDto])
 loginTeacher (@Args('loginTeacherInput')loginStudentInput: LoginTeacherInput) {
   return this.teacherService.loginTeacher(loginStudentInput);
 }

  // @Mutation(() => Teacher)
  // createTeacher(@Args('createTeacherInput') createTeacherInput: CreateTeacherInput) {
  //   return this.teacherService.create(createTeacherInput);
  // }

  // @Query(() => [Teacher], { name: 'teacher' })
  // findAll() {
  //   return this.teacherService.findAll();
  // }

  // @Query(() => Teacher, { name: 'teacher' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.teacherService.findOne(id);
  // }

  // @Mutation(() => Teacher)
  // updateTeacher(@Args('updateTeacherInput') updateTeacherInput: UpdateTeacherInput) {
  //   return this.teacherService.update(updateTeacherInput.id, updateTeacherInput);
  // }

  // @Mutation(() => Teacher)
  // removeTeacher(@Args('id', { type: () => Int }) id: number) {
  //   return this.teacherService.remove(id);
  // }
}
