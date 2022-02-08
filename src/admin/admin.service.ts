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
import { UpdateParentInput } from './inputs/updateParent.input';
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
      const admin = await this.adminModel.findById(updateAdminInput._id);
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

  async updateParent(updateParentInput: UpdateParentInput) {
    try {
      const parent = await this.parentModel.findById(updateParentInput._id);
      if (!parent) {
        let apiResponse = {
          code: 404,
          message: "Parent not found"
        }
        return apiResponse
      }
      else {
        parent.name = updateParentInput.name;
        parent.email = updateParentInput.email;
        parent.password = updateParentInput.password;
        parent.contactNumber = updateParentInput.contactNumber;
        parent.gender = updateParentInput.gender;

        const updatedParent = parent.save();

        let apiResponse = {
          code: 200,
          message: "Parent credentials are updated successfully",
          data: updatedParent
        }
        return apiResponse
      }

    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Parent credentials"
      }

      return apiResponse
    }
  }


  async updateStudent(updateStudentInput: UpdateStudentInput) {
    try {
      const student = await this.studentModel.findById(updateStudentInput._id);
      if (!student) {
        let apiResponse = {
          code: 404,
          message: "Student not found"
        }
        return apiResponse
      }
      else {
        student.name = updateStudentInput.name;
        student.email = updateStudentInput.email;
        student.password = updateStudentInput.password;
        student.gender = updateStudentInput.gender;
        student.religion = updateStudentInput.religion;
        student.dob = updateStudentInput.dob;
        student.address = updateStudentInput.address;
        student.rollNumber = updateStudentInput.rollNumber;
        student.class = updateStudentInput.class;
        student.section = updateStudentInput.section;
        student.isStudent = updateStudentInput.isStudent;
        student.parentId = updateStudentInput.parentId;


        const updatedStudent = student.save();

        let apiResponse = {
          code: 200,
          message: "Student credentials are updated successfully",
          data: updatedStudent
        }
        return apiResponse
      }

    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Student credentials"
      }

      return apiResponse
    }
  }

  async updateSubject(updateSubjectInput: UpdateSubjectInput) {
    try {
      const subject = await this.subjectsModel.findById(updateSubjectInput._id);
      if (!subject) {
        let apiResponse = {
          code: 404,
          message: "Subject not found"
        }
        return apiResponse
      }
      else {
        subject.name = updateSubjectInput.name;
        subject.subjectCode = updateSubjectInput.subjectCode;

        const updatedSubject = subject.save();

        let apiResponse = {
          code: 200,
          message: "Subject information id updated successfully",
          data: updatedSubject
        }
        return apiResponse
      }

    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Subject information"
      }

      return apiResponse
    }
  }

  async updateTeacher(updateTeacherInput: UpdateTeacherInput) {
    try {
      const teacher = await this.teacherModel.findById(updateTeacherInput._id);
      if (!teacher) {
        let apiResponse = {
          code: 404,
          message: "Teacher not found"
        }
        return apiResponse
      }
      else {
        teacher.name = updateTeacherInput.name;
        teacher.email = updateTeacherInput.email;
        teacher.password = updateTeacherInput.password;
        teacher.contactNumber = updateTeacherInput.contactNumber;
        teacher.gender = updateTeacherInput.gender;
        teacher.religion = updateTeacherInput.religion;
        teacher.dob = updateTeacherInput.dob;
        teacher.address = updateTeacherInput.address;
        teacher.employeeId = updateTeacherInput.employeeId;
        teacher.salary = updateTeacherInput.salary;
        teacher.isTeacher = updateTeacherInput.isTeacher;
        teacher.name = updateTeacherInput.name;

        const updatedTeacher = teacher.save();

        let apiResponse = {
          code: 200,
          message: "Teacher credentials are updated successfully",
          data: updatedTeacher
        }
        return apiResponse
      }

    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Teacher credentials"
      }

      return apiResponse
    }
  }

  async updateTimetable(updateTimetableInput: UpdateTimetableInput) {
    try {
      const timetable = await this.timetableModel.findById(updateTimetableInput._id);
      if (!timetable) {
        let apiResponse = {
          code: 404,
          message: "Timetable entry not found"
        }
        return apiResponse
      }
      else {
        timetable.teacherId = updateTimetableInput.teacherId;
        timetable.day = updateTimetableInput.day;
        timetable.slot = updateTimetableInput.slot;
        timetable.class = updateTimetableInput.class;
        timetable.subject = updateTimetableInput.subject;
        timetable.roomNo = updateTimetableInput.roomNo;

        const updatedTimetable = timetable.save();

        let apiResponse = {
          code: 200,
          message: "TimetableModel slot updated successfully",
          data: updatedTimetable
        }
        return apiResponse
      }

    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Timetable"
      }

      return apiResponse
    }
  }








  findAll() {
    return `This action returns all admin`;
  }


}
