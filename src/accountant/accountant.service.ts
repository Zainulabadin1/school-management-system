import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { LoginAccountantInput } from './inputs/login-accountant.input';

import { EnterFeeInput } from './inputs/enterFee.input';

import { UpdateFeeRecordInput } from './inputs/updateFeeRecord.input';

import { ViewFeeRecordInput } from './inputs/viewFeeRecord.input';

import { Accountant } from '../entities/accountant.entity';
import { Fees } from '../entities/fees.entity';

@Injectable()
export class AccountantService {
  constructor(
    @InjectModel(Accountant.name) private accountantModel: Model<Accountant>,
    @InjectModel(Fees.name) private feesModel: Model<Fees>,
  ) { }

  async loginAccountant(loginAccountant: LoginAccountantInput) {
    try {
      const accountant = await this.accountantModel.find({
        $and: [
          { email: { $eq: loginAccountant.email } },
          { password: { $eq: loginAccountant.password } }
        ]
      })
      if (accountant.length == 0) {
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

  async enterFee(enterFeeInput: EnterFeeInput) {
    try {
      const enterFee = await new this.feesModel(enterFeeInput)
      var amount = enterFee.monthlyFee - enterFee.Concession;
      enterFee.amountPaid = amount;

      const feeEntered = enterFee.save();
      let apiResponse = {
        code: 200,
        message: "Fee record successfully entered",
        data: feeEntered
      }
      return apiResponse;
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in entering fee record "
      }
      return apiResponse;
    }

  }

  async updateFeeRecord(updateFeeRecordInput: UpdateFeeRecordInput) {
    try {
      const record = await this.feesModel.findById(updateFeeRecordInput._id);
      if (!record) {
        let apiResponse = {
          code: 404,
          message: "Record not found"
        }
        return apiResponse
      }
      else {
        var amount = record.monthlyFee - record.Concession

        record.studentId = updateFeeRecordInput.studentId;
        record.monthlyFee = updateFeeRecordInput.monthlyFee;
        record.Concession = updateFeeRecordInput.Concession;
        record.isPaid = updateFeeRecordInput.isPaid;
        record.amountPaid = amount;
        record.date = updateFeeRecordInput.date;

        const updatedFeeRecord = record.save();

        let apiResponse = {
          code: 200,
          message: "Fee record updated successfully",
          data: updatedFeeRecord
        }
        return apiResponse
      }

    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in updating Fee record"
      }
      return apiResponse
    }
  }

  async viewFeeRecord() {
    try {

      const feeResults = await this.feesModel.find();
      {
        let apiResponse = {
          code: 200,
          message: "Record found",
          data: feeResults
        }
        return apiResponse;
      }
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in getting Fee record"
      }
      return apiResponse
    }

  }

  async viewStudentFee(viewSingleFeeRecord: ViewFeeRecordInput) {
    try {

      const studenFee = await this.feesModel.find({ studentId: { $eq: viewSingleFeeRecord.studentId } });
      {
        let apiResponse = {
          code: 200,
          message: "Record found",
          data: studenFee
        }
        return apiResponse;
      }
    } catch
    {
      let apiResponse = {
        code: 400,
        message: "Error in getting Fee record"
      }
      return apiResponse
    }
  }

}
