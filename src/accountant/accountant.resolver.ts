import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountantService } from './accountant.service';

import { LoginAccountantInput } from './inputs/login-accountant.input';

import { loginAccountantResponseDto } from './ApiResponsesDto/loginAccountantResponse.dto';


@Resolver()
export class AccountantResolver {
  constructor(private readonly accountantService: AccountantService) { }

  @Mutation(() => loginAccountantResponseDto)
  async loginAccountant(@Args('loginAccountantInput') loginAccountantInput: LoginAccountantInput) {
    return await this.accountantService.loginAccountant(loginAccountantInput);
  }

  
}
