import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin } from '../entities/admin.entity';

import { CreateAdminInput } from './inputs/create-admin.input';
import { CreateTeacherInput } from './inputs/create-teacher.input';
import { CreateStudentInput } from './inputs/create-student.input';
import { CreateAccountantInput } from './inputs/create-accountant.input';
import { CreateSubjectInput } from './inputs/create-subject.input';
import { UpdateAdminInput } from './inputs/update-admin.input';

import { AdminDto } from './dto/admin.dto';
import {TeacherDto } from '../teacher/dto/teacher.dto';
import { StudentDto } from '../student/dto/student.dto';
import { AccountantDto } from '../accountant/dto/accountant.dto';
import { SubjectDto } from '../commonDto/subject.dto';

@Resolver(() => AdminDto)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => AdminDto)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput);
  }

  @Mutation(()=> TeacherDto)
  createTeacher(@Args('createTeacherInput') createTeacherInput: CreateTeacherInput){
    return this.adminService.createTeacher(createTeacherInput);
  }

  @Mutation(()=> StudentDto)
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput){
    return this.adminService.createStudent(createStudentInput);
  }

  @Mutation(()=> AccountantDto)
  createAccountant(@Args('createAccountantInput') createAccountantInput: CreateAccountantInput){
    return this.adminService.createAccountant(createAccountantInput);
  }

  @Mutation(()=> SubjectDto)
  createSubject(@Args('createSubjectInput') createSubjectInput: CreateSubjectInput){
    return this.adminService.createSubject(createSubjectInput);
  }


  @Query(() => [AdminDto], { name: 'admin' })
  findAll() {
    return this.adminService.findAll();
  }

  // @Query(() => Admin, { name: 'admin' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.adminService.findOne(id);
  // }

  // @Mutation(() => Admin)
  // updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
  //   return this.adminService.update(updateAdminInput.id, updateAdminInput);
  // }

  // @Mutation(() => Admin)
  // removeAdmin(@Args('id', { type: () => Int }) id: number) {
  //   return this.adminService.remove(id);
  // }
}
