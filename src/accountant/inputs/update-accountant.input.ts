import { CreateAccountantInput } from './create-accountant.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAccountantInput extends PartialType(CreateAccountantInput) {
  @Field(() => Int)
  id: number;
}
