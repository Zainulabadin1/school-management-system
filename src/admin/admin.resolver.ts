import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';

import { CreateAdminInput } from './inputs/create-admin.input';
import { CreateTeacherInput } from './inputs/create-teacher.input';
import { CreateStudentInput } from './inputs/create-student.input';
import { CreateAccountantInput } from './inputs/create-accountant.input';
import { CreateSubjectInput } from './inputs/create-subject.input';
import { CreateTimetableInput } from './inputs/create-timetable.input';
import { createParentInput } from './inputs/createParent.input';

import { UpdateAccountantInput } from './inputs/updateAccountant.input';
import { UpdateAdminInput } from './inputs/updateAdmin.input';
import { UpdateParentInput } from './inputs/updateParent.input';
import { UpdateStudentInput } from './inputs/updateStudent.input';
import { UpdateSubjectInput } from './inputs/updateSubject.input';
import { UpdateTeacherInput } from './inputs/updateTeacher.input';
import { UpdateTimetableInput } from './inputs/updateTimtable.input';


import { LoginAdminInput } from './inputs/loginAdmin.input';

import { CreateAdminResponseDto } from './ApiResponsesDto/createAdminResponse.dto';
import { CreateTeacherResponseDto } from './ApiResponsesDto/createTeacherResponse.dto';
import { CreateStudentResponseDto } from './ApiResponsesDto/createStudentResponse.dto';
import { CreateAccountantResponseDto } from './ApiResponsesDto/createAccountantResponse.dto';
import { CreateSubjectResponseDto } from './ApiResponsesDto/createSubjectResponse.dto';
import { CreateTimetableResponseDto } from './ApiResponsesDto/createTimetableResponse.dto';
import { CreateParentResponseDto } from './ApiResponsesDto/createParentResponse.dto';

import { UpdateAccountantResponseDto } from './ApiResponsesDto/updateAccountantResponse.dto';
import { UpdateAdminResponseDto } from './ApiResponsesDto/updateAdminResponse.dto';
import { UpdateParentResponseDto } from './ApiResponsesDto/updateParentResponse.dto';
import { UpdateStudentResponseDto } from './ApiResponsesDto/updateStudentResponse.dto';
import { UpdateSubjectResponseDto } from './ApiResponsesDto/updateSubjectResponse.dto';
import { UpdateTeacherResponseDto } from './ApiResponsesDto/updateTeacherResponse.dto';
import { UpdateTimetableResponseDto } from './ApiResponsesDto/updateTimetableResponse.dto';

import { loginAdminResponseDto } from './ApiResponsesDto/loginAdminResponse.dto';



@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) { }

  @Mutation(() => CreateAdminResponseDto)
  createAdmin(@Args('createAdminInput') createAdminInput: CreateAdminInput) {
    return this.adminService.create(createAdminInput);
  }

  @Mutation(() => CreateTeacherResponseDto)
  createTeacher(@Args('createTeacherInput') createTeacherInput: CreateTeacherInput) {
    return this.adminService.createTeacher(createTeacherInput);
  }

  @Mutation(() => CreateStudentResponseDto)
  createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.adminService.createStudent(createStudentInput);
  }

  @Mutation(() => CreateParentResponseDto)
  createParent(@Args('input') parentInput: createParentInput) {
    return this.adminService.createParent(parentInput);
  }

  @Mutation(() => CreateAccountantResponseDto)
  createAccountant(@Args('createAccountantInput') createAccountantInput: CreateAccountantInput) {
    return this.adminService.createAccountant(createAccountantInput);
  }

  @Mutation(() => CreateSubjectResponseDto)
  createSubject(@Args('createSubjectInput') createSubjectInput: CreateSubjectInput) {
    return this.adminService.createSubject(createSubjectInput);
  }


  @Mutation(() => CreateTimetableResponseDto)
  createTimetable(@Args('createTimetableInput') createTimetableInput: CreateTimetableInput) {
    return this.adminService.createTimetable(createTimetableInput);
  }


  @Mutation(() => loginAdminResponseDto)
  loginAdmin(@Args('loginAdminInput') loginAdminInput: LoginAdminInput) {
    return this.adminService.loginAdmin(loginAdminInput);
  }

  @Mutation(() => UpdateAccountantResponseDto)
  updateAccountant(@Args('updateAccountantInput') updateAccountantInput: UpdateAccountantInput) {
    return this.adminService.updateAccountant(updateAccountantInput);
  }

  @Mutation(() => UpdateAdminResponseDto)
  updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
    return this.adminService.updateAdmin(updateAdminInput);
  }

  @Mutation(() => UpdateParentResponseDto)
  updateParent(@Args('updateParentInput') updateParentInput: UpdateParentInput) {
    return this.adminService.updateParent(updateParentInput);
  }

  @Mutation(() => UpdateStudentResponseDto)
  updateStudent(@Args('updateStudentInput') updateStudentInput: UpdateStudentInput) {
    return this.adminService.updateStudent(updateStudentInput);
  }

  @Mutation(() => UpdateSubjectResponseDto)
  updateSubject(@Args('updateSubjectInput') updateSubjectInput: UpdateSubjectInput) {
    return this.adminService.updateSubject(updateSubjectInput);
  }

  @Mutation(() => UpdateTeacherResponseDto)
  updateTeacher(@Args('updateTeacherInput') updateTeacherInput: UpdateTeacherInput) {
    return this.adminService.updateTeacher(updateTeacherInput);
  }

  @Mutation(() => UpdateTimetableResponseDto)
  updateTimetable(@Args('updateTimetableInput') updateTimetableInput: UpdateTimetableInput) {
    return this.adminService.updateTimetable(updateTimetableInput);
  }






  @Query(() => [CreateAdminResponseDto], { name: 'admin' })
  findAll() {
    return this.adminService.findAll();
  }


}
