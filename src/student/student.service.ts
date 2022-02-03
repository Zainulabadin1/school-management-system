import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './inputs/create-student.input';
import { UpdateStudentInput } from './inputs/update-student.input';

@Injectable()
export class StudentService {
  create(createStudentInput: CreateStudentInput) {
    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all student`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentInput: UpdateStudentInput) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
