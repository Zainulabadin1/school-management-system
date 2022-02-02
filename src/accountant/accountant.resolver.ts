import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountantService } from './accountant.service';
import { Accountant } from './accountant.schema';
import { CreateAccountantInput } from './dto/create-accountant.input';
import { UpdateAccountantInput } from './dto/update-accountant.input';

@Resolver(() => Accountant)
export class AccountantResolver {
  constructor(private readonly accountantService: AccountantService) {}

  @Mutation(() => Accountant)
  createAccountant(@Args('createAccountantInput') createAccountantInput: CreateAccountantInput) {
    return this.accountantService.create(createAccountantInput);
  }

  @Query(() => [Accountant], { name: 'accountant' })
  findAll() {
    return this.accountantService.findAll();
  }

  @Query(() => Accountant, { name: 'accountant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.accountantService.findOne(id);
  }

  @Mutation(() => Accountant)
  updateAccountant(@Args('updateAccountantInput') updateAccountantInput: UpdateAccountantInput) {
    return this.accountantService.update(updateAccountantInput.id, updateAccountantInput);
  }

  @Mutation(() => Accountant)
  removeAccountant(@Args('id', { type: () => Int }) id: number) {
    return this.accountantService.remove(id);
  }
}
