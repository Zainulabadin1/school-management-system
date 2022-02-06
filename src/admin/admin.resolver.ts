import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';

import { CreateAdminInput } from './inputs/create-admin.input';
import { CreateTeacherInput } from './inputs/create-teacher.input';
import { CreateStudentInput } from './inputs/create-student.input';
import { CreateAccountantInput } from './inputs/create-accountant.input';
import { CreateSubjectInput } from './inputs/create-subject.input';
import { CreateTimetableInput } from './inputs/create-timetable.input';

import { LoginAdminInput } from './inputs/login-admin.input';

import { AdminDto } from './dto/admin.dto';
import { TeacherDto } from '../teacher/dto/teacher.dto';
import { StudentDto } from '../student/dto/student.dto';
import { AccountantDto } from '../accountant/dto/accountant.dto';
import { SubjectDto } from '../commonDto/subject.dto';
import { TimetableDto } from '../commonDto/timetable.dto';
import { ParentDto } from '../parent/dto/parent.dto';
import { createParentInput } from './inputs/createParent.input';


@Resolver(() => AdminDto)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) { }

  @Mutation(() => AdminDto)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput);
  }

  @Mutation(() => TeacherDto)
  createTeacher(@Args('createTeacherInput') createTeacherInput: CreateTeacherInput) {
    return this.adminService.createTeacher(createTeacherInput);
  }

  @Mutation(() => StudentDto)
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.adminService.createStudent(createStudentInput);
  }

  @Mutation(() => ParentDto)
  createParent(@Args('input') parentInput: createParentInput) {
    return this.adminService.createParent(parentInput);
  }

  @Mutation(() => AccountantDto)
  createAccountant(@Args('createAccountantInput') createAccountantInput: CreateAccountantInput) {
    return this.adminService.createAccountant(createAccountantInput);
  }

  @Mutation(() => SubjectDto)
  createSubject(@Args('createSubjectInput') createSubjectInput: CreateSubjectInput) {
    return this.adminService.createSubject(createSubjectInput);
  }


  @Mutation(() => TimetableDto)
  createTimetable(@Args('createTimetableInput') createTimetableInput: CreateTimetableInput) {
    return this.adminService.createTimetable(createTimetableInput);
  }


  @Mutation(() => [AdminDto])
  loginAdmin(@Args('loginAdminInput') loginAdminInput: LoginAdminInput) {
    return this.adminService.loginAdmin(loginAdminInput);
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
