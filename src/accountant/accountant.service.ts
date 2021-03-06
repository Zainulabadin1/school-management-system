import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { LoginAccountantInput } from './inputs/login-accountant.input';

import { EnterFeeInput } from './inputs/enterFee.input';
import { EnterSalaryInput } from './inputs/enterSalary.input';
import { EnterExpenseInput } from './inputs/enterExpenses.input';

import { UpdateFeeRecordInput } from './inputs/updateFeeRecord.input';
import { UpdateSalaryRecordInput } from './inputs/updateSalaryRecord.input';
import { UpdateExpensesInput } from './inputs/updateExpenses.input';

import { ViewFeeRecordInput } from './inputs/viewFeeRecord.input';

import { Accountant } from '../entities/accountant.entity';
import { Fees } from '../entities/fees.entity';
import { Salary } from '../entities/salary.entity';
import { Expenses } from '../entities/expenses.entity';

@Injectable()
export class AccountantService {
  constructor(
    @InjectModel(Accountant.name) private accountantModel: Model<Accountant>,
    @InjectModel(Fees.name) private feesModel: Model<Fees>,
    @InjectModel(Salary.name) private salaryModel: Model<Salary>,
    @InjectModel(Expenses.name) private expensesModel: Model<Expenses>,
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
    catch (error) {
      let apiResponse = {
        code: 204,
        message: error.message
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
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse;
    }

  }

  async updateFeeRecord(updateFeeRecordInput: UpdateFeeRecordInput) {
    try {
      const record = await this.feesModel.findByIdAndUpdate(updateFeeRecordInput._id, { $set: updateFeeRecordInput }, { new: true });
      if (!record) {
        let apiResponse = {
          code: 404,
          message: "Record not found"
        }
        return apiResponse
      }
      else {
        var amount = record.monthlyFee - record.Concession
        record.amountPaid = amount;

        const updatedFeeRecord = record.save();

        let apiResponse = {
          code: 200,
          message: "Fee record updated successfully",
          data: updatedFeeRecord
        }
        return apiResponse
      }

    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
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
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
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
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }
  }

  async enterSalary(enterSalaryInput: EnterSalaryInput) {
    try {
      const enteringSalary = await new this.salaryModel(enterSalaryInput)
      var amount = enteringSalary.salary - enteringSalary.fine;
      enteringSalary.amountPaid = amount;

      const salaryEntered = enteringSalary.save();
      let apiResponse = {
        code: 200,
        message: "Salary record successfully entered",
        data: salaryEntered
      }
      return apiResponse;
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse;
    }

  }

  async updateSalaryRecord(updateSalaryInput: UpdateSalaryRecordInput) {
    try {
      const record = await this.salaryModel.findByIdAndUpdate(updateSalaryInput._id, { $set: updateSalaryInput }, { new: true });
      if (!record) {
        let apiResponse = {
          code: 404,
          message: "Record not found"
        }
        return apiResponse
      }
      else {
        var amount = record.salary - record.fine;
        record.amountPaid = amount;

        const updatedSalaryRecord = record.save();

        let apiResponse = {
          code: 200,
          message: "Salary record updated successfully",
          data: updatedSalaryRecord
        }
        return apiResponse
      }

    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }
  }


  async enterExpense(enterExpenseInput: EnterExpenseInput) {
    try {
      const enteringExpense = await new this.expensesModel(enterExpenseInput)

      const expenseEntered = enteringExpense.save();
      let apiResponse = {
        code: 200,
        message: "Expense record successfully entered",
        data: expenseEntered
      }
      return apiResponse;
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse;
    }

  }

  async updateExpenses(updateExpenseInput: UpdateExpensesInput) {
    try {
      const updatedExpenseRecord = await this.expensesModel.findByIdAndUpdate(updateExpenseInput._id, { $set: updateExpenseInput }, { new: true });
      if (!updatedExpenseRecord) {
        let apiResponse = {
          code: 404,
          message: "Record not found"
        }
        return apiResponse
      }
      else {

        let apiResponse = {
          code: 200,
          message: "Expense record updated successfully",
          data: updatedExpenseRecord
        }
        return apiResponse
      }

    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }
  }


  async totalFeeCollected() {
    try {

      const feeResults = await this.feesModel.find();
      const totalFee = feeResults.reduce((p, n) => p + n.amountPaid, 0)
      {
        let apiResponse = {
          code: 200,
          message: "Record found",
          totalFeePaid: totalFee
        }
        return apiResponse;
      }
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }

  }


  async totalExpensesCollected() {
    try {

      const expenses = await this.expensesModel.find();
      const totalExpenses = expenses.reduce((p, n) => p + n.amountPaid, 0)
      {
        let apiResponse = {
          code: 200,
          message: "Expenses record found",
          totalExpenses: totalExpenses
        }
        return apiResponse;
      }
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }

  }


  async totalSalariesPaid() {
    try {

      const salaries = await this.salaryModel.find();
      const totalSalaries = salaries.reduce((p, n) => p + n.amountPaid, 0)
      {
        let apiResponse = {
          code: 200,
          message: "Salaries record found",
          totalSalariesPaid: totalSalaries
        }
        return apiResponse;
      }
    } catch (error) {
      let apiResponse = {
        code: 400,
        message: error.message
      }
      return apiResponse
    }

  }

}
