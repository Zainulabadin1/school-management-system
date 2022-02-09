import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountantService } from './accountant.service';

import { LoginAccountantInput } from './inputs/login-accountant.input';

import { EnterFeeInput } from './inputs/enterFee.input';

import { UpdateFeeRecordInput } from './inputs/updateFeeRecord.input';

import { loginAccountantResponseDto } from './ApiResponsesDto/loginAccountantResponse.dto';

import { EnterFeeResponseDto } from './ApiResponsesDto/enterFeeResponse.dto';

import { UpdateFeeRecordResponseDto } from './ApiResponsesDto/updateFeeRecordResponse.dto';


@Resolver()
export class AccountantResolver {
  constructor(private readonly accountantService: AccountantService) { }

  @Mutation(() => loginAccountantResponseDto)
  async loginAccountant(@Args('loginAccountantInput') loginAccountantInput: LoginAccountantInput) {
    return await this.accountantService.loginAccountant(loginAccountantInput);
  }

  @Mutation(()=> EnterFeeResponseDto )
  async enterFee(@Args('enterFeeInput') enterFeeInput:EnterFeeInput ){
    return await this.accountantService.enterFee(enterFeeInput);
  }


  @Mutation(()=> UpdateFeeRecordResponseDto)
  async updateFeeRecord(@Args('updateFeeRecordInput') updateFeeRecordInput:UpdateFeeRecordInput ){
    return await this.accountantService.updateFeeRecord(updateFeeRecordInput);
  }
  
}
