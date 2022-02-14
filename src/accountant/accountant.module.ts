import { Module } from '@nestjs/common';
import { AccountantService } from './accountant.service';
import { AccountantResolver } from './accountant.resolver';
import { MongooseModule } from '@nestjs/mongoose';

import { Accountant, AccountantSchema } from '../entities/accountant.entity';
import { Fees, FeesSchema } from '../entities/fees.entity';
import { Salary, SalarySchema } from '../entities/salary.entity';
import { Expenses, ExpensesSchema } from '../entities/expenses.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accountant.name, schema: AccountantSchema }]),

    MongooseModule.forFeature([
      { name: Fees.name, schema: FeesSchema }]),

    MongooseModule.forFeature([
      { name: Salary.name, schema: SalarySchema }]),

    MongooseModule.forFeature([
      { name: Expenses.name, schema: ExpensesSchema }]),

  ],
  providers: [AccountantResolver, AccountantService]
})
export class AccountantModule { }
