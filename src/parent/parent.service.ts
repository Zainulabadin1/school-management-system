import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LoginParentInput } from './inputs/login-parent.input';

import { Parent } from '../entities/parent.entity';

@Injectable()
export class ParentService {
  constructor (
    @InjectModel(Parent.name) private readonly parentModel: Model<Parent>,
  ){}


async loginParent (loginParent : LoginParentInput){
  return await this.parentModel.find({
    $and: [
      { email: { $eq: loginParent.email } },
      { password: { $eq: loginParent.password } }
    ]
  })
}

  // create(createParentInput: CreateParentInput) {
  //   return 'This action adds a new parent';
  // }

  // findAll() {
  //   return `This action returns all parent`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} parent`;
  // }

  // update(id: number, updateParentInput: UpdateParentInput) {
  //   return `This action updates a #${id} parent`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} parent`;
  // }
}
