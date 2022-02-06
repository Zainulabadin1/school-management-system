import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountantService } from './accountant.service';

import { LoginAccountantInput } from './inputs/login-accountant.input';

import { AccountantDto } from './dto/accountant.dto';


@Resolver(() => AccountantDto)
export class AccountantResolver {
  constructor(private readonly accountantService: AccountantService) { }

  @Mutation(() => [AccountantDto])
  async loginAccountant(@Args('loginAccountantInput') loginAccountantInput: LoginAccountantInput) {
    return await this.accountantService.loginAccountant(loginAccountantInput);
  }

  // @Mutation(() => Accountant)
  // createAccountant(@Args('createAccountantInput') createAccountantInput: CreateAccountantInput) {
  //   return this.accountantService.create(createAccountantInput);
  // }

  // @Query(() => [Accountant], { name: 'accountant' })
  // findAll() {
  //   return this.accountantService.findAll();
  // }

  // @Query(() => Accountant, { name: 'accountant' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.accountantService.findOne(id);
  // }

  // @Mutation(() => Accountant)
  // updateAccountant(@Args('updateAccountantInput') updateAccountantInput: UpdateAccountantInput) {
  //   return this.accountantService.update(updateAccountantInput.id, updateAccountantInput);
  // }

  // @Mutation(() => Accountant)
  // removeAccountant(@Args('id', { type: () => Int }) id: number) {
  //   return this.accountantService.remove(id);
  // }
}
