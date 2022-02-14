import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountantService } from './accountant.service';

import { LoginAccountantInput } from './inputs/login-accountant.input';

import { EnterFeeInput } from './inputs/enterFee.input';
import { EnterSalaryInput } from './inputs/enterSalary.input';
import { EnterExpenseInput } from './inputs/enterExpenses.input';

import { UpdateFeeRecordInput } from './inputs/updateFeeRecord.input';
import { UpdateSalaryRecordInput } from './inputs/updateSalaryRecord.input';
import { UpdateExpensesInput } from './inputs/updateExpenses.input';

import { ViewFeeRecordInput } from './inputs/viewFeeRecord.input';


import { loginAccountantResponseDto } from './ApiResponsesDto/loginAccountantResponse.dto';

import { EnterFeeResponseDto } from './ApiResponsesDto/enterFeeResponse.dto';
import { EnterSalaryResponseDto } from './ApiResponsesDto/enterSalaryResponse.dto';
import { EnterExpenseResponseDto } from './ApiResponsesDto/enterExpenseResponse.dto';

import { UpdateFeeRecordResponseDto } from './ApiResponsesDto/updateFeeRecordResponse.dto';
import { UpdateSalaryRecordResponseDto } from './ApiResponsesDto/updateSalaryRecordResponse.dto';
import { UpdateExpensesResponseDto } from './ApiResponsesDto/updateExpensesResponse.dto';

import { ViewFeeRecordResponseDto } from './ApiResponsesDto/viewFeeRecordResponse.dto';
import { utimes } from 'fs';



@Resolver()
export class AccountantResolver {
  constructor(private readonly accountantService: AccountantService) { }

  @Mutation(() => loginAccountantResponseDto)
  async loginAccountant(@Args('loginAccountantInput') loginAccountantInput: LoginAccountantInput) {
    return await this.accountantService.loginAccountant(loginAccountantInput);
  }

  @Mutation(() => EnterFeeResponseDto)
  async enterFee(@Args('enterFeeInput') enterFeeInput: EnterFeeInput) {
    return await this.accountantService.enterFee(enterFeeInput);
  }


  @Mutation(() => UpdateFeeRecordResponseDto)
  async updateFeeRecord(@Args('updateFeeRecordInput') updateFeeRecordInput: UpdateFeeRecordInput) {
    return await this.accountantService.updateFeeRecord(updateFeeRecordInput);
  }

  @Query(() => ViewFeeRecordResponseDto)
  async viewFee() {
    return await this.accountantService.viewFeeRecord();
  }

  @Query(() => ViewFeeRecordResponseDto)
  async viewStudentFee(@Args('viewSingleFeeRecord') viewSingleFeeRecord: ViewFeeRecordInput) {
    return await this.accountantService.viewStudentFee(viewSingleFeeRecord);
  }

  @Mutation(() => EnterSalaryResponseDto)
  async enterSalary(@Args('enterSalaryInput') enterSalaryInput: EnterSalaryInput) {
    return await this.accountantService.enterSalary(enterSalaryInput);
  }

  @Mutation(() => UpdateSalaryRecordResponseDto)
  async updateSalaryRecord(@Args('updateSalaryInput') updateSalaryInput: UpdateSalaryRecordInput) {
    return await this.accountantService.updateSalaryRecord(updateSalaryInput);
  }

  @Mutation(() => EnterExpenseResponseDto)
  async enterExpense(@Args('enterExpenseInput') enterExpenseInput: EnterExpenseInput) {
    return await this.accountantService.enterExpense(enterExpenseInput);
  }

  @Mutation(() => UpdateExpensesResponseDto)
  async updateExpenses(@Args('updateExpenseInput') updateExpenseInput: UpdateExpensesInput) {
    return await this.accountantService.updateExpenses(updateExpenseInput);
  }





}
