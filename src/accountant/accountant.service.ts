import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { LoginAccountantInput } from './inputs/login-accountant.input';

import { Accountant } from '../entities/accountant.entity';

@Injectable()
export class AccountantService {
  constructor(
    @InjectModel(Accountant.name) private accountantModel: Model<Accountant>,
  ){}

  async loginAccountant(loginAccountant: LoginAccountantInput){

    console.log("credentials are : " , loginAccountant.email , loginAccountant.password)
    return await this.accountantModel.find()
    // console.log("result here", result)
    // return result;
  }


  // create(createAccountantInput: CreateAccountantInput) {
  //   return 'This action adds a new accountant';
  // }

  // findAll() {
  //   return `This action returns all accountant`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} accountant`;
  // }

  // update(id: number, updateAccountantInput: UpdateAccountantInput) {
  //   return `This action updates a #${id} accountant`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} accountant`;
  // }
}
