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
  try{ 
    const parent =await this.parentModel.find({
    $and: [
      { email: { $eq: loginParent.email } },
      { password: { $eq: loginParent.password } }
    ]
  })
  if (parent.length == 0) {
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

  
}
