import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateAdminInput } from './inputs/create-admin.input';
import { CreateTeacherInput } from './inputs/create-teacher.input';
import { CreateStudentInput } from './inputs/create-student.input';
import { CreateAccountantInput } from './inputs/create-accountant.input';
import { CreateSubjectInput } from './inputs/create-subject.input';
import { CreateTimetableInput } from './inputs/create-timetable.input';
import { CreateParentInput } from '../parent/inputs/create-parent.input';
import { LoginAdminInput } from './inputs/login-admin.input';

import { Admin } from '../entities/admin.entity';
import { Teacher } from '../entities/teacher.entity';
import { Student } from '../entities/student.entity';
import { Parent } from '../entities/parent.entity';
import { Accountant } from '../entities/accountant.entity';
import { Subjects } from '../entities/subject.entity';
import { Timetable } from '../entities/timteable.entity';
import { createParentInput } from './inputs/createParent.input';


@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private readonly adminModel: Model<Admin>,
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
    @InjectModel(Accountant.name) private readonly accountantModel: Model<Accountant>,
    @InjectModel(Subjects.name) private readonly subjectsModel: Model<Subjects>,
    @InjectModel(Timetable.name) private readonly timetableModel: Model<Timetable>,
    @InjectModel(Parent.name) private readonly parentModel: Model<Parent>
  ) { }


  async create(createAdmin: CreateAdminInput): Promise<Admin> {
    const admin = await new this.adminModel(createAdmin)
    return admin.save();
  }

  async createTeacher(createTeacher: CreateTeacherInput): Promise<Teacher> {
    const teacher = await new this.teacherModel(createTeacher)
    return teacher.save();
  }

  async createStudent(createStudent: CreateStudentInput): Promise<Student> {
    const student = await new this.studentModel(createStudent)
    return student.save();
  }

  async createAccountant(createAccountant: CreateAccountantInput): Promise<Accountant> {
    const accountant = await new this.accountantModel(createAccountant)
    return accountant.save();
  }

  async createSubject(createSubject: CreateSubjectInput): Promise<Subjects> {
    const subject = await new this.subjectsModel(createSubject)
    return subject.save();
  }

  async createParent( parentInput : createParentInput)
  {
    const parent = new this.parentModel(parentInput)
    return parent.save()
  }

  async createTimetable(createTimetable: CreateTimetableInput): Promise<Timetable> {
    const timetable = await new this.timetableModel(createTimetable)
    return timetable.save();
  }

  async loginAdmin(loginAdmin: LoginAdminInput){
    return await this.adminModel.find({
      $and: [
        { email: { $eq: loginAdmin.email } },
        { password: { $eq: loginAdmin.password } }
      ]
    })
  }







  findAll() {
    return `This action returns all admin`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} admin`;
  // }

  // update(id: number, updateAdminInput: UpdateAdminInput) {
  //   return `This action updates a #${id} admin`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} admin`;
  // }
}
