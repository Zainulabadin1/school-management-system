import { Injectable } from '@nestjs/common';
import { CreateAccountantInput } from './inputs/create-accountant.input';
import { UpdateAccountantInput } from './inputs/update-accountant.input';

@Injectable()
export class AccountantService {
  create(createAccountantInput: CreateAccountantInput) {
    return 'This action adds a new accountant';
  }

  findAll() {
    return `This action returns all accountant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountant`;
  }

  update(id: number, updateAccountantInput: UpdateAccountantInput) {
    return `This action updates a #${id} accountant`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountant`;
  }
}
