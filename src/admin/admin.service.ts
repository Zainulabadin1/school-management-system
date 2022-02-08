import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateAdminInput } from './inputs/create-admin.input';
import { CreateTeacherInput } from './inputs/create-teacher.input';
import { CreateStudentInput } from './inputs/create-student.input';
import { CreateAccountantInput } from './inputs/create-accountant.input';
import { CreateSubjectInput } from './inputs/create-subject.input';
import { CreateTimetableInput } from './inputs/create-timetable.input';
import { createParentInput } from './inputs/createParent.input';
import { LoginAdminInput } from './inputs/login-admin.input';

import { UpdateAccountantInput } from './inputs/updateAccountant.input';
import { UpdateAdminInput } from './inputs/updateAdmin.input';
import { UpdateParentInput } from '../parent/inputs/update-parent.input';
import { UpdateStudentInput } from './inputs/updateStudent.input';
import { UpdateSubjectInput } from './inputs/updateSubject.input';
import { UpdateTeacherInput } from './inputs/updateTeacher.input';
import { UpdateTimetableInput } from './inputs/updateTimtable.input';

import { Admin } from '../entities/admin.entity';
import { Teacher } from '../entities/teacher.entity';
import { Student } from '../entities/student.entity';
import { Parent } from '../entities/parent.entity';
import { Accountant } from '../entities/accountant.entity';
import { Subjects } from '../entities/subject.entity';
import { Timetable } from '../entities/timteable.entity';



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


  async create(createAdmin: CreateAdminInput) {
    try {
      const admin = await new this.adminModel(createAdmin)
      const adminCreated = admin.save();
      let apiResponse = {
        code: 200,
        message: "Admin is successfully added",
        data: adminCreated
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating student "
      }
      return apiResponse;
    }
  }

  async createTeacher(createTeacher: CreateTeacherInput) {
    try {
      const teacher = await new this.teacherModel(createTeacher)

      var today = new Date().getFullYear();
      var dob = createTeacher.dob.getFullYear();
      var calculatedAge = today - dob;
      teacher.age = calculatedAge

      const teacherCreated = teacher.save();
      let apiResponse = {
        code: 200,
        message: "Teacher is successfully added",
        data: teacherCreated
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating student "
      }
      return apiResponse;
    }
  }

  async createStudent(createStudent: CreateStudentInput) {
    try {
      const student = await new this.studentModel(createStudent)

      var today = new Date().getFullYear();
      var dob = createStudent.dob.getFullYear();
      var calculatedAge = today - dob;
      student.age = calculatedAge

      const studentCreated = student.save();
      let apiResponse = {
        code: 200,
        message: "Student is successfully added",
        data: studentCreated
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating student "
      }
      return apiResponse;
    }
  }

  async createAccountant(createAccountant: CreateAccountantInput) {
    try {
      const accountant = await new this.accountantModel(createAccountant)

      var today = new Date().getFullYear();
      var dob = createAccountant.dob.getFullYear();
      var calculatedAge = today - dob;
      accountant.age = calculatedAge


      const accountantCreated = accountant.save();
      let apiResponse = {
        code: 200,
        message: "Accountant is successfully added",
        data: accountantCreated
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating student "
      }
      return apiResponse;
    }


  }

  async createSubject(createSubject: CreateSubjectInput) {
    try {
      const subject = await new this.subjectsModel(createSubject)
      const subjectCreated = subject.save();
      let apiResponse = {
        code: 200,
        message: "Subject is successfully added",
        data: subjectCreated
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating student "
      }
      return apiResponse;
    }
  }

  async createParent(parentInput: createParentInput) {
    try {
      const parent = new this.parentModel(parentInput)
      const parentCreated = parent.save()
      let apiResponse = {
        code: 200,
        message: "Parent is successfully added",
        data: parentCreated
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating student "
      }
      return apiResponse;
    }
  }

  async createTimetable(createTimetable: CreateTimetableInput) {
    try {
      const timetable = await new this.timetableModel(createTimetable)
      const timetableCreated = timetable.save();
      let apiResponse = {
        code: 200,
        message: "Timetable entry successfully added",
        data: timetableCreated
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Some error in creating student "
      }
      return apiResponse;
    }
  }


  async loginAdmin(loginAdmin: LoginAdminInput) {
    try {
      const admin = await this.adminModel.find({
        $and: [
          { email: { $eq: loginAdmin.email } },
          { password: { $eq: loginAdmin.password } }
        ]
      })
      if (admin.length == 0) {
        let apiResponse = {
          code: 404,
          message: "Your email or password might be wrong"
        }

        return apiResponse
      }
      else {
        let apiResponse = {
          code: 200,
          message: "You are successfully logged in"
        }

        return apiResponse
      }
    }
    catch
    {
      let apiResponse = {
        code: 204,
        message: "Some error in logging in"
      }

      return apiResponse
    }
  }

  async updateAccountant(updateAccountantInput: UpdateAccountantInput) {
    try {
      const accountant = await this.accountantModel.findById(updateAccountantInput._id);
      if (!accountant) {
        let apiResponse = {
          code: 404,
          message: "Accountant not found"
        }
        return apiResponse
      }
      else {
        accountant.name = updateAccountantInput.name;
        accountant.email = updateAccountantInput.email;
        accountant.password = updateAccountantInput.password;
        accountant.contactNumber = updateAccountantInput.contactNumber;
        accountant.gender = updateAccountantInput.gender;
        accountant.religion = updateAccountantInput.religion;
        accountant.dob = updateAccountantInput.dob;
        accountant.address = updateAccountantInput.address;
        accountant.employeeId = updateAccountantInput.employeeId;
        accountant.salary = updateAccountantInput.salary;
        accountant.isAccountant = updateAccountantInput.isAccountant;
        const updatedaccountant = accountant.save();

        let apiResponse = {
          code: 200,
          message: "Accountant credentials are updated successfully",
          data: updatedaccountant
        }
        return apiResponse
      }
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Accountant credentials"
      }

      return apiResponse
    }
  }

  async updateAdmin(updateAdminInput: UpdateAdminInput) {
    try {
      const admin = await this.adminModel.findById(updateAdminInput);
      if (!admin) {
        let apiResponse = {
          code: 404,
          message: "Admin not found"
        }
        return apiResponse
      }
      else {
        admin.name = updateAdminInput.name;
        admin.email = updateAdminInput.email;
        admin.password = updateAdminInput.password;

        const updatedAdmin = admin.save();

        let apiResponse = {
          code: 200,
          message: "Admin credentials are updated successfully",
          data: updatedAdmin
        }
        return apiResponse
      }

    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Admin credentials"
      }

      return apiResponse
    }
  }





  findAll() {
    return `This action returns all admin`;
  }


}
